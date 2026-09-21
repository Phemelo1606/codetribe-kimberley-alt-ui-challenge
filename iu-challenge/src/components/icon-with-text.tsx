import React from 'react';

type LucideIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type IconWithTextProps = {
    icon: LucideIcon;
    text: string;
};

function IconText({ icon: Icon, text }: IconWithTextProps) {
    return (
        <div className="icon-text">
            <span className="icon-text-badge">
                <Icon aria-hidden="true" className="icon-text-icon" strokeWidth={1.75} />
            </span>
            <p className="icon-text-label">{text}</p>
        </div>
    );
}

export default IconText;