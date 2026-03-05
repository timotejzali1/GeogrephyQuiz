import { motion } from 'framer-motion';

const STAGE_CONFIG = [
  { speed: 20, filter: 'saturate(0.4) brightness(0.6)', class: 'globe-stage-1' },
  { speed: 15, filter: 'saturate(0.55) brightness(0.75)', class: 'globe-stage-2' },
  { speed: 10, filter: 'saturate(0.85) brightness(0.95)', class: 'globe-stage-3' },
  { speed: 6, filter: 'saturate(1) brightness(1)', class: 'globe-stage-4' },
  { speed: 3, filter: 'saturate(1.1) brightness(1.05)', class: 'globe-stage-5' },
];

const GLOBE_BLUE = '#2563eb';
const GLOBE_GREEN = '#84cc16';

export function Globe({ resultTier }) {
  const tier = Math.max(1, Math.min(5, resultTier));
  const config = STAGE_CONFIG[tier - 1];

  return (
    <div className="globe-wrap">
      <motion.div
        className={`globe globe-svg-wrap ${config.class}`}
        style={{
          animationDuration: `${config.speed}s`,
          filter: config.filter,
        }}
        aria-hidden="true"
      >
        <svg
          className="globe-svg"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="globe-clip">
              <circle cx="50" cy="50" r="50" />
            </clipPath>
          </defs>
          {/* Ocean */}
          <circle cx="50" cy="50" r="50" fill={GLOBE_BLUE} />
          {/* Simplified continents – light green, smooth shapes */}
          <g clipPath="url(#globe-clip)" fill={GLOBE_GREEN}>
            {/* Africa */}
            <path
              d="M 32 38 Q 28 48 30 62 Q 34 72 42 68 Q 48 62 46 52 Q 44 40 36 36 Q 32 36 32 38 Z"
            />
            {/* Europe */}
            <path
              d="M 42 28 Q 48 24 56 28 Q 62 32 58 38 Q 54 42 46 40 Q 40 36 40 30 Q 40 28 42 28 Z"
            />
            {/* Asia */}
            <path
              d="M 52 32 Q 68 28 78 36 Q 86 44 82 54 Q 78 64 68 62 Q 58 58 54 48 Q 50 38 52 32 Z"
            />
            {/* South America (left side) */}
            <path
              d="M 18 52 Q 14 62 16 78 Q 20 88 28 84 Q 34 78 32 66 Q 30 54 24 50 Q 20 48 18 52 Z"
            />
            {/* North America (left) */}
            <path
              d="M 22 22 Q 16 28 14 40 Q 12 52 18 48 Q 24 44 28 34 Q 30 26 26 22 Q 24 20 22 22 Z"
            />
            {/* Australia / smaller landmass bottom right */}
            <path
              d="M 72 72 Q 78 74 82 70 Q 86 66 84 76 Q 82 84 76 86 Q 70 84 70 78 Q 70 72 72 72 Z"
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
