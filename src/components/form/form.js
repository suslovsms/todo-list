import formStyle from  "./form.module.css"
import {Input} from "../ui-lib/inputs/input"
import inputText from "./inputsText"

export default function Form(){
const Inputs = inputText.map((item) => (<Input
  key = {item.id}
  placeholder={item.placeholder} 
  style={formStyle.input}/>))
    return (
      <div className={formStyle.formContainer}>
        <div className={formStyle.title}>Свяжитесь с нами</div>
        <div className={formStyle.fields}>
            {Inputs}
        </div>
      </div>
    );
}