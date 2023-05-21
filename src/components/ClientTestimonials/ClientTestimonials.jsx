import emily from './../../assets/image-emily.jpg'
import thomas from './../../assets/image-thomas.jpg'
import jeanie from './../../assets/image-jennie.jpg'
import './ClientTestimonials.css'

function ClientTestimonials() {
    return (
        <section className="Testimony__Wrapper">
            <article className="Testimonial__Heading">
                <strong className="Testimonial__Title">
                Client testimonials
                </strong>
            </article>
            <nav className="Testimony">
                <article className="Profile">
                <img src={emily} alt="emily pic" className="Profile__Pic" />
                <p className="Testimony__Text">
                We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                </p>
                <p className="Name">
                Emily R.
                </p>
                <p className="Profession">
                Marketing Director
                </p>
                </article>
                <article className="Profile">
                <img src={thomas} alt="thomas pic" className="Profile__Pic" />
                <p className="Testimony__Text">
                Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
                </p>
                <p className="Name">
                Thomas S.
                </p>
                <p className="Profession">
                Chief Operating Officer
                </p>
                </article>
                <article className="Profile">
                <img src={jeanie} alt="jeanie pic" className="Profile__Pic" />
                <p className="Testimony__Text">
                Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                </p>
                <p className="Name">
                Jennie F.
                </p>
                <p className="Profession">
                Business Owner
                </p>
                </article>
            </nav>
        </section>
    )
}

export default ClientTestimonials;