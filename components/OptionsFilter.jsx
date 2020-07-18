
function OptionsFilter(props){
    const { icon, name, selected, options, onOptionChange} = props;
    return(
        <div className="field">
            <div className="control has-icons-left">
                <div className="select" style={ {width: '100%'} }>
                    <select style={ {width: '100%'} } onChange={onOptionChange} value={selected} name={name}> 
                        {options.map((option) => (
                            <option key={option.value}>{option.name}</option>
                        ))}
                    </select>
                </div>
                <div className="icon is-small is-left">
                    <i className={`fas ${icon}`}></i>
                </div>
            </div>
        </div>
    );
}

