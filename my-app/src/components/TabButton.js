export default function ExportButton({ children, isSelected, ...props }) {
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
        </li>
    );
}