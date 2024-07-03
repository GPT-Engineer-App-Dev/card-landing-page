import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
      <form className="max-w-xl mx-auto">
        <div className="mb-4">
          <Input type="text" placeholder="Name" required />
        </div>
        <div className="mb-4">
          <Input type="email" placeholder="Email" required />
        </div>
        <div className="mb-4">
          <Textarea placeholder="Message" required />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Contact;