import React from 'react'

export default function CourseCard() {
  return (
    <>
    <div class="super_container">
    <div className="popular page_section">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="section_title text-center">
                            <h1>Popular Courses</h1>
                        </div>
                    </div>
                </div>

                <div className="row course_boxes">

                    <div className="col-lg-4 course_box">
                        <div className="card ">
                            <img className="card-img-top" src="images/inte.jpeg" alt="https://unsplash.com/@kellybrito"/>
                            <div className="card-body text-center">
                                <div className="card-title"><a href="courses.html"> Tutorial on Integration</a></div>
                                <div className="card-text">integral of some function wrt some variable x...</div>
                            </div>
                            <div className="price_box d-flex flex-row align-items-center">
                                <div className="course_author_image">
                                    <img src="images/author.jpg" alt="https://unsplash.com/@mehdizadeh"/>
                                </div>
                                <div className="course_author_name">Srinivas Jain</div>
                                <div className="course_price d-flex flex-column align-items-center justify-content-center"></div>
                            </div>
                        </div>
                    </div>
                    

               
                    <div className="col-lg-4 course_box">
                        <div className="card">
                            <img className="card-img-top" src="images/eco.png" alt="https://unsplash.com/@cikstefan"/>
                            <div className="card-body text-center">
                                <div className="card-title"><a href="courses.html">Economy of the world</a></div>
                                <div className="card-text">Layes, Smart Objects etc...</div>
                            </div>
                            <div className="price_box d-flex flex-row align-items-center">
                                <div className="course_author_image">
                                    <img src="images/author.jpg" alt="https://unsplash.com/@mehdizadeh"/>
                                </div>
                                <div className="course_author_name">Srinivas Jain</div>
                                <div className="course_price d-flex flex-column align-items-center justify-content-center"></div>
                            </div>
                        </div>
                    </div>

                 
                    <div className="col-lg-4 course_box">
                        <div className="card">
                            <img className="card-img-top" src="images/id.jpg" style={{width:"350px", height:"300px" }} alt="https://unsplash.com/@dsmacinnes"/>
                            <div className="card-body text-center">
                                <div className="card-title"><a href="courses.html"> Indus Valley Civilization</a></div>
                                <div className="card-text">Adobe Guide, Layes, Smart Objects etc...</div>
                            </div>
                            <div className="price_box d-flex flex-row align-items-center">
                                <div className="course_author_image">
                                    <img src="images/author.jpg" alt="https://unsplash.com/@mehdizadeh"/>
                                </div>
                                <div className="course_author_name">Srinivas Jain </div>
                                <div className="course_price d-flex flex-column align-items-center justify-content-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}
