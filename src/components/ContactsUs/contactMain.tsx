import MapLocation from "./mapLocation";
import ContactContent from "./ContactContent";
const MainContact = () => {
  return (
    <>
      <section className="flex  justify-center  py-[5rem] max-phoneL:py-[3rem] ">
        <div className="contact-content w-[90%] flex flex-col gap-16 max-laptop:w-[90%] max-phoneL:w-full max-phoneL:px-2 max-phoneP:gap-10">
          <ContactContent />
          <MapLocation />
        </div>
      </section>
    </>
  );
};

export default MainContact;
