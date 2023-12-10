import "./Page.css";

type PageParams = {
    children: React.ReactNode;
};
export function Page({ children }: PageParams) {
    return (
        <div className="Page-container">{children}</div>
    );
}