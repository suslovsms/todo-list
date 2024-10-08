import questionsStyles from "./questions.module.css";
import TextCard from "../ui-lib/textCard/textCard";
import questionsData from "./textQuestions";

export default function Questions() {
  const TextCards = questionsData.map((item) => (
    <div key={item.id} className={questionsStyles.card}>
      <TextCard
        title={item.title}
        description={item.description}
        classNameTitle={questionsStyles.title}
        classNameText={questionsStyles.description}
      />
    </div>
  ));

  return (
    <div className={questionsStyles.container}>
      <h2 className={questionsStyles.heading}>Часто задаваемые вопросы</h2>
      <div className={questionsStyles.grid}>{TextCards}</div>
    </div>
  );
}
