import "./Page.css";

type PageParams = {
    children: React.ReactNode;
};
/**
 * Represents a container for page's main content.
 */
export function Page({ children }: PageParams) {
    return (
        <div className="Page-container">{children}</div>
    );
}