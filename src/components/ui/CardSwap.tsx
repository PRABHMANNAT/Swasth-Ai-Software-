import { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef } from "react";
import type {
  CSSProperties,
  HTMLAttributes,
  MouseEvent,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from "react";
import gsap from "gsap";
import "./CardSwap.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`card-swap-card ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
    />
  )
);

Card.displayName = "Card";

const makeSlot = (index: number, distX: number, distY: number, total: number) => ({
  x: index * distX,
  y: -index * distY,
  z: -index * distX * 1.5,
  zIndex: total - index,
});

const placeNow = (
  el: gsap.TweenTarget,
  slot: ReturnType<typeof makeSlot>,
  skew: number
) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (index: number) => void;
  skewAmount?: number;
  easing?: "elastic" | "smooth";
  children: ReactNode;
}

type CardElementProps = HTMLAttributes<HTMLDivElement> & {
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
}: CardSwapProps) => {
  const config = useMemo(
    () =>
      easing === "elastic"
        ? {
            ease: "elastic.out(0.6,0.9)",
            durDrop: 2,
            durMove: 2,
            durReturn: 2,
            promoteOverlap: 0.9,
            returnDelay: 0.05,
          }
        : {
            ease: "power1.inOut",
            durDrop: 0.8,
            durMove: 0.8,
            durReturn: 0.8,
            promoteOverlap: 0.45,
            returnDelay: 0.2,
          },
    [easing]
  );

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const orderRef = useRef<number[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    orderRef.current = Array.from({ length: childArr.length }, (_, index) => index);
  }, [childArr.length]);

  useEffect(() => {
    const node = containerRef.current;

    if (!node) {
      return undefined;
    }

    const cards = Array.from(node.querySelectorAll<HTMLDivElement>(".card-swap-card"));
    const total = cards.length;

    if (total === 0) {
      return undefined;
    }

    cards.forEach((card, index) => {
      placeNow(card, makeSlot(index, cardDistance, verticalDistance, total), skewAmount);
    });

    const clearSwapInterval = () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const swap = () => {
      if (orderRef.current.length < 2) {
        return;
      }

      const [front, ...rest] = orderRef.current;
      const frontElement = cards[front];

      if (!frontElement) {
        return;
      }

      const timeline = gsap.timeline();
      timelineRef.current = timeline;

      timeline.to(frontElement, {
        y: "+=500",
        duration: config.durDrop,
        ease: config.ease,
      });

      timeline.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);

      rest.forEach((index, offset) => {
        const element = cards[index];

        if (!element) {
          return;
        }

        const slot = makeSlot(offset, cardDistance, verticalDistance, cards.length);

        timeline.set(element, { zIndex: slot.zIndex }, "promote");
        timeline.to(
          element,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${offset * 0.15}`
        );
      });

      const backSlot = makeSlot(
        cards.length - 1,
        cardDistance,
        verticalDistance,
        cards.length
      );

      timeline.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      timeline.call(
        () => {
          gsap.set(frontElement, { zIndex: backSlot.zIndex });
        },
        undefined,
        "return"
      );
      timeline.to(
        frontElement,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return"
      );
      timeline.call(() => {
        orderRef.current = [...rest, front];
      });
    };

    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const pause = () => {
        timelineRef.current?.pause();
        clearSwapInterval();
      };

      const resume = () => {
        timelineRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };

      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);

      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        clearSwapInterval();
      };
    }

    return () => clearSwapInterval();
  }, [cardDistance, config, delay, pauseOnHover, skewAmount, verticalDistance]);

  const rendered = childArr.map((child, index) => {
    if (!isValidElement<CardElementProps>(child)) {
      return child;
    }

    const element = child as ReactElement<CardElementProps>;

    return cloneElement(element, {
      key: element.key ?? index,
      style: { width, height, ...(element.props.style ?? {}) },
      onClick: (event: MouseEvent<HTMLDivElement>) => {
        element.props.onClick?.(event);
        onCardClick?.(index);
      },
    });
  });

  return (
    <div
      ref={containerRef}
      className="card-swap-container"
      style={{ width, height }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;
