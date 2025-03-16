# Micro-FrontEnd-ECommerce

## Project Overview
This case study evaluates frontend developers' proficiency in modern frameworks like React and Next.js while adhering to SOLID principles and the 12-Factor App methodology. The project involves a component-based architecture, micro frontend structures, and state management using RTK Query.

## Technologies Used
- **Frameworks:** [React](https://react.dev/), [Next.js](https://nextjs.org/)
- **Design Library:** [Ant Design](https://ant.design)
- **Languages:** TypeScript, JavaScript
- **State Management:** [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- **API Source:** [Fake Store API](https://fakestoreapi.com/)
- **Micro Frontend Architecture:** Multi Zones (instead of Webpack 5 Module Federation, which is now deprecated)
- **Design Reference:** [Figma Template](https://www.antforfigma.com/templates/e-commerce-template)

## Architectural Structure
### **Host Application (Next.js)**
- The host application is built with Next.js and integrates remote applications.
- It fetches product data from the API and communicates with the remote basket application.

### **Remote Applications**
#### **Product List Remote**
- Built using Next.js.
- Fetches products from the API and interacts with the host application.

#### **Basket Remote**
- Built using React.
- Displays selected products sent by the host application.

## **Installation**
### **1. Clone the Repository**
```sh
 git clone https://github.com/senafrakara/Micro-FrontEnd-ECommerce.git
 cd MICRO-FRONTEND-ECOMMERCE
```

### **2. Set Environment Variables**
Create a **`.env.local`** file in the root directory of each Next.js application:
```sh
NEXT_PUBLIC_API_BASE_URL=https://fakestoreapi.com/
```

### **3. Install Dependencies**
Run the following commands in each application folder:
```sh
cd host && npm install
cd ../product-list-remote && npm install
cd ../basket-remote && npm install
```

### **4. Start the Applications**
Run each application in a separate terminal:
```sh
# Host Application
cd host
npm run dev

# Products Remote
cd ../product-list-remote
npm run dev

# Basket Remote
cd ../basket-remote
npm run dev
```

**Running Applications:**
- **Host Application** → `http://localhost:3000`
- **Products Remote** → `http://localhost:3002`
- **Basket Remote** → `http://localhost:3001`

## **Technical Requirements**
### **12-Factor App Compliance**
1. **Codebase:** All applications must pull from a central repository.
2. **Dependencies:** All dependencies must be defined in `package.json`.
3. **Configuration:** Configuration must be managed through environment variables.
4. **Backing Services:** Services like API and state management must be decoupled.
5. **Build & Run Separation:** The build and runtime processes should be distinct.
6. **Stateless Processes:** All components should be stateless.
7. **Port Independence:** Host and remote applications should run on different ports.
8. **Concurrency:** The application should be horizontally scalable.
9. **Disposability:** The application should release resources when terminated.
10. **Dev/Prod Parity:** The difference between test and production environments should be minimal.
11. **Logs:** The application should output logs to a standard output.
12. **Admin Processes:** Development and debugging processes should be separate.

### **SOLID Principles**
1. **Single Responsibility Principle:** Each component should have only one responsibility.
2. **Open/Closed Principle:** Components should be open for extension but closed for modification.
3. **Liskov Substitution Principle:** Subclasses should be substitutable for their base classes.
4. **Interface Segregation Principle:** Users should not depend on unnecessary interfaces.
5. **Dependency Inversion Principle:** High-level modules should not depend on low-level modules.

### **Higher-Order Components (HOC)**
- The implementation should use HOCs to handle shared behaviors.

## **Expected Deliverables**
- A functional host application displaying products from the products remote.
- Selected products should be displayed in the basket remote.
- Optimized API queries using RTK Query.
- A fully functional micro frontend architecture with Multi Zones.
- A responsive UI following the Figma template.

## **Versioning**
- **Test Branch:** The initial development is done in the `test/v1.0.0` branch.
- **Production Branch:** Once tested, the code is merged into the `prod/v1.0.0` branch.

## 📜 License  
This project is released under the MIT license.  

## 📞 Contact  
If you have any questions, please feel free to reach out:  
📧 **senafrakara@gmail.com**  

### 🔥 **Key Features**  
✅ **Multi Zones Next.js Architecture** 🏗  
✅ **SOLID & 12-Factor App Principles** 🏆  
✅ **Optimized API Calls with RTK Query** 🚀  
✅ **Modern UI with Ant Design** 🎨  
✅ **Docker & CI/CD Options** 📦  

---
This project demonstrates the use of a modern frontend architecture with **Next.js Multi Zones**, ensuring scalability and modularity. 🚀



