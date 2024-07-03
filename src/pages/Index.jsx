import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="flex justify-between items-center py-4 px-8 bg-gray-100">
        <div className="flex items-center">
          <img src="https://placehold.co/50x50" alt="Logo" className="mr-2" />
          <span className="text-xl font-bold">Cardify</span>
        </div>
        <nav className="flex space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section id="home" className="text-center py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1200x600')" }}>
        <h1 className="text-5xl font-bold mb-4">Welcome to Cardify</h1>
        <p className="text-xl mb-8">Your ultimate card management solution.</p>
        <Button onClick={() => navigate("#features")}>Get Started</Button>
      </section>

      <section id="features" className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="flex justify-around">
          <Card className="w-1/3 mx-4">
            <CardHeader>
              <CardTitle>Easy Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage your cards effortlessly.</p>
            </CardContent>
          </Card>
          <Card className="w-1/3 mx-4">
            <CardHeader>
              <CardTitle>Secure Storage</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Keep your cards safe and secure.</p>
            </CardContent>
          </Card>
          <Card className="w-1/3 mx-4">
            <CardHeader>
              <CardTitle>Quick Access</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access your cards anytime, anywhere.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>
        <div className="flex justify-around">
          <Card className="w-1/3 mx-4">
            <CardHeader>
              <CardTitle>Basic</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$9.99/month</p>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="w-1/3 mx-4">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$19.99/month</p>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="w-1/3 mx-4">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$29.99/month</p>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
                <li>Feature 5</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
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
      </section>

      <footer className="py-4 bg-gray-100 text-center">
        <nav className="flex justify-center space-x-4 mb-4">
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
          <a href="#terms" className="hover:underline">Terms of Service</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://placehold.co/30x30" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://placehold.co/30x30" alt="Twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://placehold.co/30x30" alt="LinkedIn" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;