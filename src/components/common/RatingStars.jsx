import { Rating } from "@wali-developer/react-rating-stars";
const RatingStars = ({value,onChange,readOnly=false}) => {
  return (
    <div className="flex items-center gap-1" dir="ltr">
      <Rating
        value={value}
        onChange={onChange}
         readOnly={readOnly}
        allowHalf={true}
        size={18}
        filledColor="#FACC15"
        emptyColor="#E5E7EB"
        halfColor="#FACC15"
      />
    </div>
  );
};

export default RatingStars;
