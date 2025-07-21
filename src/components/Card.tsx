import type { PropsCard } from "../vite-env"
import { Link } from "react-router"

export default function CardProject({title, img, description, visiteUrl}: PropsCard) {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={img} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
              <p>{description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary"><Link to={visiteUrl}>Visiter</Link></button>
              </div>
           </div>
          </div>
    )
}