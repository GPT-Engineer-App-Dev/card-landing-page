const Features = () => {
  return (
    <div className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
      <div className="flex justify-around">
        <div className="w-1/3 mx-4">
          <h3 className="text-2xl font-bold mb-4">Easy Management</h3>
          <p>Manage your cards effortlessly.</p>
        </div>
        <div className="w-1/3 mx-4">
          <h3 className="text-2xl font-bold mb-4">Secure Storage</h3>
          <p>Keep your cards safe and secure.</p>
        </div>
        <div className="w-1/3 mx-4">
          <h3 className="text-2xl font-bold mb-4">Quick Access</h3>
          <p>Access your cards anytime, anywhere.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;