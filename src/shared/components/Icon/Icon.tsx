import { FC, SVGProps, useEffect, useRef } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  svg: string;
}

export type PreparedIconProps = Omit<IconProps, 'svg'>;

const loadSvgAsString = async (svgPath: string): Promise<string> => {
  const response = await fetch(svgPath);
  if (!response.ok) throw new Error(`Failed to load SVG: ${svgPath}`);
  return await response.text();
};

export const Icon: FC<IconProps> = ({
  svg,
  height = 24,
  width = 24,
  ...attributes
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const updateSvg = async () => {
    if (!wrapperRef.current) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(
      await loadSvgAsString(svg),
      'image/svg+xml',
    );
    const svgElement = doc.querySelector('svg');

    if (!svgElement) return;

    svgElement.setAttribute('width', String(width ?? height));
    svgElement.setAttribute('height', String(height ?? width));
    Object.entries(attributes).forEach(([key, value]) => {
      if (value !== undefined) {
        svgElement.setAttribute(key, String(value));
      }
    });

    wrapperRef.current.innerHTML = '';
    wrapperRef.current.appendChild(svgElement);
  };

  useEffect(() => {
    updateSvg();
  }, [svg]);

  return <div ref={wrapperRef} />;
};
