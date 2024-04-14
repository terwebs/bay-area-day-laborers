import { useState, useEffect } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: "vjsjzzeftidf",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchAbout = () => {
  const [aboutContent, setAboutContent] = useState("");
  const getData = async () => {
    const response = await client.getEntry("2EGmgIlL3yoKYQFRnSlbpR");
    const aboutContent = response.fields.content.content[0].content[0].value;
    setAboutContent(aboutContent);
  };
  useEffect(() => {
    getData();
  }, []);
  return { aboutContent };
};

export const useFetchHero = () => {
  const [heroContent, setHeroContent] = useState({ heroTitle: "", img: "" });
  const getData = async () => {
    const response = await client.getEntry("5pv20NqGDOKajpKuw8nwdB");
    const { title, heroImage } = response.fields;
    const img = heroImage.fields?.file?.url;
    setHeroContent({ ...heroContent, heroTitle: title, img: img });
    return heroContent;
  };
  useEffect(() => {
    getData();
  }, []);
  return { heroContent };
};

export const useFetchContact = () => {
  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
    address: "",
  });
  const getData = async () => {
    const response = await client.getEntry("3JUpkZLAm80NLWq1KbrVGg");
    const { email, address, phone } = response.fields;
    setContactInfo({ ...contactInfo, email, phone, address });
    return contactInfo;
  };
  useEffect(() => {
    getData();
  }, []);
  return { contactInfo };
};

export const useFetchServices = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "services" });
      const services = response.items.map((item) => {
        const { img, serviceName } = item.fields;
        const id = item.sys.id;
        const image = img?.fields?.file?.url;
        return { id, serviceName, image };
      });
      setServices(services);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, services };
};
