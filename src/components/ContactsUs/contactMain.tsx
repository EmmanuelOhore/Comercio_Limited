import MapLocation from "./mapLocation";
import ContactContent from "./ContactContent";
const MainContact = () => {
  return (
    <>
      <section className="flex  justify-center  py-[5rem] phoneL:py-[3rem] ">
        <div className="contact-content w-[90%] flex flex-col gap-16 laptop:w-[90%] phoneL:w-full phoneL:px-2 phoneP:gap-10">
          <ContactContent />
          <MapLocation />
        </div>
      </section>
    </>
  );
};

export default MainContact;
