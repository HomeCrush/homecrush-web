export default function MatchCard ({ title, images }) {
    return (
      <div className='match_card'>
        <img src={images} className="card-img-top" alt={title} />
        <div className='match_card_info'>
          <h2>{title}</h2>
        </div>
      </div>
    );
  }