function DataTag(props){
    const {name, icon} = props
    return(
        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-medium is-info">
              <i className={`fas ${icon}`}></i>
            </span>
            {name === "city" ? (
                <span className="tag is-medium">{props.city}, {props.country}</span>
            ) : (
                <span className="tag is-medium">{props.rooms} Habitaciones</span>
            )}
          </div>
        </div>
    )
}
