import Article from '../Article/Article';
import './TopSection.css'

function TopSection() {
    return (
        <section className="Top__Container">
            <Article className='Info__Cards' />
            <Article className='Descriptive'>
                <strong className="Title">
                Transform your brand
                </strong>
                <p className="Description">
                We are a full-service creative agency specializing in helping brands grow fast. 
  Engage your clients through compelling visuals that do most of the marketing for you.
                </p>
                <a href="#" className="Learn__More">
                Learn More
                </a>
            </Article>
            <Article className='Info__Cards' />
            <Article className='Descriptive'>
                <strong className="Title">
                Stand out to the right audience
                </strong>
                <p className="Description">
                Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
                </p>
                <a href="#" className="Second__Learn__More">
                Learn more
                </a>
            </Article>
            <Article className='Description__Image'>
                <strong className="Lower__Title">
                Graphic design
                </strong>
                <p className="Lower__Description">
                Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
                </p>
            </Article>
            <Article className='Second__Description__Image'>
                <strong className="Second__Lower__Title">
                Photography
                </strong>
                <p className="Second__Lower__Description">
                Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                </p>
            </Article>
        </section>
    )
}

export default TopSection;