import questionsStyles from  "./questions.module.css"
import TextCard from "../ui-lib/textCard/textCard"

export default function Questions(){
    return (
      <div className={questionsStyles.container}>
        Частно задаваемые вопросы
        <TextCard title = "Как выбрать идеальный маршрут?" discription= "Сначала определитесь с уровнем сложности и временем. Затем, изучите отзывы и советы от опытных путешественников!"/>
        <TextCard title = "Что взять с собой в поход?" discription= "Не забудьте про удобную обувь, еду, воду и, конечно, хорошее настроение!"/>
        <TextCard title = "Как избежать неприятностей в походе?" discription= "Следуйте инструкциям, не забывайте о безопасности и всегда держите связь с группой!"/>
        <TextCard title = "Можно ли взять с собой домашних животных?" discription= "Да, но только если они не будут мешать вашему приключению!"/>
        <TextCard title = "Где найти единомышленников для похода?" discription= "На нашем сайте, конечно! Присоединяйтесь к сообществу!"/>

      </div>
      
    );
}