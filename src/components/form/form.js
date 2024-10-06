import formStyle from  "./form.module.css"
import Input from "../ui-lib/inputs/input"

export default function Form(){
    return (
      <div className={formStyle.container}>
        <Input placeholder = "Имя"/>
        <Input placeholder = "Телефон"/>
        <Input placeholder = "Сообщение"/>
        <Input placeholder = "Email"/>
      </div>
    );
}