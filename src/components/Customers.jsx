import { ClientsItems } from "../constants/Constant";

const Customers = () => {
  return (
    <section
      id="customers"
      className="relative flex flex-col items-center justify-center px-4 py-8"
    >
      <div className="conatiner w-full md:max-w-7xl mx-auto text-center z-10 space-y-8">
        <h4 className="text-lg font-bold text-foreground/30 uppercase">
          {ClientsItems.title}
        </h4>

        <div className="border-t-2 border-b-2 space-y-4 py-6 overflow-hidden">
          <div className="flex justify-around p-2 space-x-12">
            {ClientsItems.clients.map((item, key) => (
              <div
                key={key}
                className="flex items-center space-x-2 text-foreground/30"
              >
                {item.icon}
                <span className="text-xl font-bold">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
