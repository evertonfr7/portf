import { ContactContent } from "@/components/contact-content";

export function Contact() {
  return (
    <section
      className="py-32 px-6 bg-surface-container-low/30 relative overflow-hidden"
      id="contact"
    >
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <ContactContent />
    </section>
  );
}
