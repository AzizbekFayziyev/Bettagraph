import axios from "axios";
import { FormEvent } from "react";

const telegram_bot_id: string =
  "5876903040:AAFnxx99F-qz_F-PF3FIZvFtBP0QNPlbanE";
const chat_id: number = 1965600955;

const sendMessage = (
  e: FormEvent<HTMLFormElement>,
  name: string,
  name2: string,
  name3: string,
  message1: string,
  message2: string,
  message3: string,
  clear: () => void
) => {
  e.preventDefault();

  const msg = `BETTAGRAPH\n\n${name}: ${message1} \n${name2}: ${message2} \n${name3}: ${message3}`;

  const settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: msg,
    }),
  };

  axios(settings)
    .then(function () {
      window.alert("Xabar yuborildi, tez orada aloqaga chiqamiz!");
      clear();
    })
    .catch(function (error) {
      console.log(error);
    });

  return false;
};

export default sendMessage;
