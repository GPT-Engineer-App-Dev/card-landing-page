const Pricing = () => {
  return (
    <div className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>
      <div className="flex justify-around">
        <div className="w-1/3 mx-4">
          <h3 className="text-2xl font-bold mb-4">Basic</h3>
          <p>$9.99/month</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </div>
        <div className="w-1/3 mx-4">
          <h3 className="text-2xl font-bold mb-4">Pro</h3>
          <p>$19.99/month</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
        </div>
        <div className="w-1/3 mx-4">
          <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
          <p>$29.99/month</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;