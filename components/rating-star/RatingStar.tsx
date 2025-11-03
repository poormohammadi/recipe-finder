import { StartEmptyIcon, StartFillIcon, StartHalfIcon } from "@/icons";
import { useMemo } from "react";
import { RatingStarContainer } from "./RatingStar.styles";

export const RatingStar = ({ rating }: { rating: number }) => {
  const fullStars = useMemo(() => Math.floor(rating), [rating]);
  const hasHalfStar = useMemo(() => rating % 1 >= 0.5, [rating]);
  const emptyStars = useMemo(
    () => 5 - fullStars - (hasHalfStar ? 1 : 0),
    [fullStars, hasHalfStar]
  );

  return (
    <RatingStarContainer>
      {Array.from({ length: fullStars }).map((_, index) => (
        <StartFillIcon key={index} />
      ))}
      {Array.from({ length: hasHalfStar ? 1 : 0 }).map((_, index) => (
        <StartHalfIcon key={index} />
      ))}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <StartEmptyIcon key={index} />
      ))}
    </RatingStarContainer>
  );
};
