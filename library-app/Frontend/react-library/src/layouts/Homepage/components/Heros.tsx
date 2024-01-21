export const Heros = () => {
    return (
        <div>
            <div className="d-none d-lg-block">
                <div className="row g-0 mt-5">
                    <div className="col-sm-6 col-md-6 ">
                        <div className="col-image-left">
                        <img src={require("./../../../Images/PublicImages/image-1.jpg")} width='632' height='400' alt="fireplace" />
                        </div>
                    </div>
                    <div className="col-4 col-md-4 container justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>What have you been reading?</h1>
                            <p className="lead">
                                We would like to know what you have been reading.
                                Either to learn or master a skill,
                                We will be able to provide the top content for you!
                            </p>
                            <a href="#" className="btn btn-lg main-color text-white">Sign up</a>
                        </div>

                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>We always have new collections!</h1>
                            <p className="lead">
                                Try to check in daily as our collection is always changing!
                                We provide the most possible accurate book selection
                                for our MAKTUB students! We are diligent about our book collection
                                the books you like are the top priority for us.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-right">
                            <img src={require("./../../../Images/PublicImages/image-4.jpg")} width='650' height='400' alt="mountain" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Heros */}
            <div className="d-lg-none">
                <div className="container">
                    <div className="m-2">
                        <div className="col-image-left"></div>
                        <div className="m-2">
                            <h1>What have you been reading?</h1>
                            <p className="lead">
                                We would like to know what you have been reading.
                                Either to learn or master a skill,
                                We will be able to provide the top content for you!
                            </p>
                            <a href="#" className="btn btn-lg main-color text-white">Sign up</a>
                        </div>
                    </div>
                    <div className="m-2">
                        <div className="col-image-right">
                            <div className="mt-2">
                                <h1>We always have new collections!</h1>
                                <p className="lead">
                                    Try to check in daily as our collection is always changing!
                                    We provide the most possible accurate book selection
                                    for our MAKTUB students! We are diligent about our book collection
                                    the books you like are the top priority for us.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}