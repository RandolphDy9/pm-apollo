import Header from "../components/Header";

const About = () => {
  return (
    <div>
      <Header label="About" />

      <div className="col-12 row">
        <div className="col-md-6">
          <div className="my-4 card rounded-4 border-0">
            <div className="card-body d-flex flex-column">
              <h2 className="mb-0 pb-0">
                Welcome to Harmony - Your Project Management Solution
              </h2>
            </div>
          </div>
          <div className="my-4 card rounded-4 border-0">
            <div className="card-body d-flex flex-column">
              <h6>
                Empowering Your Workflow with
                <br /> React JS, Apollo, GraphQL, and Bootstrap
              </h6>
            </div>
          </div>
          <div className="my-4 card rounded-4 border-0">
            <div className="card-body d-flex flex-column">
              <b>Key Features:</b>
              <ul>
                <li>
                  Project Management: Create, edit, and organize projects
                  effortlessly.
                </li>
                <li>
                  Client Management: Associate clients with specific projects
                  for enhanced collaboration.
                </li>
                <li>
                  React JS Powered: Enjoy a modern and dynamic user interface.
                </li>
                <li>
                  Apollo and GraphQL Integration: Optimize data fetching and
                  manipulation for enhanced performance.
                </li>
                <li>
                  Bootstrap Styling: A visually appealing and responsive design
                  for seamless user experience.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="my-md-4 card rounded-4 border-0">
            <div className="card-body d-flex flex-column">
              <div>
                At Harmony, we believe in simplifying project management to
                amplify productivity. Our React JS application, powered by
                cutting-edge technologies like Apollo and GraphQL, seamlessly
                blends functionality and user experience, providing you with a
                robust and intuitive platform for project organization.
              </div>
              <br />
              <div>
                <b>Tech Stack Excellence: </b>
                Built with React JS, our application offers a dynamic and
                responsive user interface, creating a seamless experience across
                devices. The integration of Apollo and GraphQL enhances data
                fetching and manipulation, ensuring your application stays
                performant and scalable.
              </div>
              <br />
              <div>
                <b>Bootstrap Styling for Aesthetic Appeal:</b>
                We've incorporated Bootstrap to not only make our application
                visually appealing but also to guarantee a responsive and
                accessible design. Your projects deserve to look as good as they
                perform.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
