import { Badge } from 'theme-ui'
import style from "@/components/routes/grade/gradeBadge.module.css";
export const GradeBadge = ({grade}) => {

  const getBadgeStyleFromGrade = (grade) => {
    const gradeNumber = parseInt(grade[0])
    if (gradeNumber < 6) {
      return style.easy;
    } else if (gradeNumber >= 6 && gradeNumber <= 8) {
      return style.medium;
    } else if (gradeNumber > 8) {
      return style.hard;
    }
    return style.easy;
  }

  return (
    <Badge className={getBadgeStyleFromGrade(grade)}>
      {grade}
    </Badge>
  )
}