export const LibraryServices = () => {
    return (
        <div className="container my-5">
            <div className="row p-4 align-items-center border shadow-lg">
                <div className="display-4 fw-bold">

                    <h1>
                        Can't find what you're looking for?
                    </h1>
                    <p className="lead">
                        If you can't find what you're looking for,
                        send a personal message to our library admin!
                    </p>

                    <div className="d-grid gap-2 justify-content-md-start mb-4 mb-lg-3">

                        <a href="#" className="btn btn-large main-color text-white">
                            Sign up
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 shadow-lg lost-image">
                </div>
            </div>
        </div>
    );
}