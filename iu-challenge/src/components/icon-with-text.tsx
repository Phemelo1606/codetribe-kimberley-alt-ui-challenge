import React from 'react';

type LucideIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type IconWithTextProps = {
    icon: LucideIcon;
    text: string
}

function IconText({ icon: Icon, text }: IconWithTextProps) {
    return (
        <p><Icon aria-hidden="true" /> {text}</p>
    )
}

export default IconText;