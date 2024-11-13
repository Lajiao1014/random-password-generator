const CheckBox = ({ label, checked, onChange }) => {
    return (
        <label className="flex items-center gap-2">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            {label}
        </label>
    )
}

export default CheckBox 