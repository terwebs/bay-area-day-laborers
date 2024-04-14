import SectionTitle from "./SectionTitle";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { useFetchContact } from "./FetchData";

const Contact = () => {
  const { contactInfo } = useFetchContact();
  const { email, phone, address } = contactInfo;

  return (
    <section id="contact" className="bg-slate-700 py-40">
      <div className="align-element flex flex-col items-center gap-y-4 text-white">
        <SectionTitle text={"Contact"} textColor="white" />

        <div className="flex items-center gap-x-1">
          <AiOutlineMail />
          <a href="mailto:bayareadaylabor@gmail.com">{email}</a>
        </div>
        <div className="flex items-center gap-x-1">
          <BsTelephone />
          <span dir="ltr">{phone}</span>
        </div>
        <h4>{address}</h4>
      </div>
    </section>
  );
};

export default Contact;
