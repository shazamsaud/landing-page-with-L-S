import React from 'react'

import CourseCard from './components/CourseCard'
import ServicesSpace from './components/ServicesSpace'
import EventsSpace from './components/EventsSpace'


export default function Home() {
  return (
    <>
    <div class="super_container">
<div className="home">


    <div className="hero_slider_container">
        <div className="hero_slider owl-carousel">

     
            <div className="hero_slide">
                <div className="hero_slide_background" style={{backgroundImage:'url(images/slider_background.jpg)'}}></div>
                <div className="hero_slide_container d-flex flex-column align-items-center justify-content-center">
                    <div className="hero_slide_content text-center">
                        <h1 data-animation-in="fadeInUp" data-animation-out="animate-out fadeOut">Start your <span>Learning</span> today!</h1>
                    </div>
                </div>
            </div>

        
            <div className="hero_slide">
                <div className="hero_slide_background" style={{backgroundImage:'url(images/slider_background.jpg)'}}></div>
                <div className="hero_slide_container d-flex flex-column align-items-center justify-content-center">
                    <div className="hero_slide_content text-center">
                        <h1 data-animation-in="fadeInUp" data-animation-out="animate-out fadeOut">Start your    <span>Teaching</span> today!</h1>
                    </div>
                </div>
            </div>

    
        </div>

        <div className="hero_slider_left hero_slider_nav trans_200"><span className="trans_200">prev</span></div>
        <div className="hero_slider_right hero_slider_nav trans_200"><span className="trans_200">next</span></div>
    </div>

    </div>

    <div className="hero_boxes">
    <div className="hero_boxes_inner">
        <div className="container">
            <div className="row">

                <div className="col-lg-4 hero_box_col">
                    <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                        <img src="images/earth-globe.svg" className="svg" alt=""/>
                        <div className="hero_box_content">
                            <h2 className="hero_box_title">Our Courses</h2>
                            <a href="courses.html" className="hero_box_link">view more</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 hero_box_col">
                    <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                        <img src="images/books.svg" className="svg" alt=""/>
                        <div className="hero_box_content">
                            <h2 className="hero_box_title">Our Library</h2>
                            <a href="courses.html" className="hero_box_link">view more</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 hero_box_col">
                    <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                        <img src="images/professor.svg" className="svg" alt=""/>
                        <div className="hero_box_content">
                            <h2 className="hero_box_title">Our Teachers</h2>
                            <a href="teachers.html" className="hero_box_link">view more</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
</div>
<CourseCard/>
< ServicesSpace/>
<EventsSpace/>

    </>
  )
}
