import style from "@/components/routes/grade/GradeBadge.module.css";
export const GradeBadge = ({ grade }) => {
  const getBadgeStyleFromGrade = (grade) => {
    const gradeNumber = parseInt(grade[0]);
    if (gradeNumber < 6) {
      return style.easy;
    } else if (gradeNumber >= 6 && gradeNumber <= 8) {
      return style.medium;
    } else if (gradeNumber > 8) {
      return style.hard;
    }
    return style.easy;
  };

  return <div className={getBadgeStyleFromGrade(grade)}>{grade}</div>;
};
