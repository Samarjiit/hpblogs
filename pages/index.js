import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <article className="overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-4 font-weight-bold">
                HPLUMBERS BLOGS 
              </h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center pt-4 pb-5">
              <p className="lead">
                Best blogs for bathroom and kitchen services
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg" +
                      ")",
                  }}
                >
                  <h2 className="text-shadow text-center h1">Bathroom</h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/bathroom">
                    <a>
                      <h3 className="h1">bathroom</h3>
                    </a>
                  </Link>
                  
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg" +
                      ")",
                  }}
                >
                  <h2 className="text-shadow text-center h1">Node</h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/kitchen">
                    <a>
                      <h3 className="h1">kitchen</h3>
                    </a>
                  </Link>
                  
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg" +
                      ")",
                  }}
                >
                  <h2 className="text-shadow text-center h1">Next</h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/plumbing">
                    <a>
                      <h3 className="h1">plumbing</h3>
                    </a>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Index;
