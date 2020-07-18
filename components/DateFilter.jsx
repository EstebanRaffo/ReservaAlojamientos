
function DateFilter(props){
    const { date, icon, name, onDateChange } = props;
    return(
        <div className="field">
            <div className="control has-icons-left">
                <input className="input" type="date" min="2020-05-20" max="2020-09-30" value={moment(date).format("YYYY-MM-DD")} onChange={onDateChange} name={name}/> 
                <span className="icon is-small is-left">
                    <i className={`fas ${icon}`}></i>
                </span>
            </div>
        </div>
    );
}
