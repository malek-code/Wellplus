/* @ds-bundle: {"format":4,"namespace":"E24WellPlusDesignSystem_54c90b","components":[{"name":"DataTable","sourcePath":"components/admin/DataTable.jsx"},{"name":"StatTile","sourcePath":"components/admin/StatTile.jsx"},{"name":"StatusBadge","sourcePath":"components/admin/StatusBadge.jsx"},{"name":"TrendBars","sourcePath":"components/admin/TrendBars.jsx"},{"name":"Carousel","sourcePath":"components/commerce/Carousel.jsx"},{"name":"CartLine","sourcePath":"components/commerce/CartLine.jsx"},{"name":"CategoryTile","sourcePath":"components/commerce/CategoryTile.jsx"},{"name":"ProductTile","sourcePath":"components/commerce/ProductTile.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"KeyValueRow","sourcePath":"components/core/KeyValueRow.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Skeleton","sourcePath":"components/core/Skeleton.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Sheet","sourcePath":"components/feedback/Sheet.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Stepper","sourcePath":"components/forms/Stepper.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"PointsBalance","sourcePath":"components/loyalty/PointsBalance.jsx"},{"name":"PointsHistoryRow","sourcePath":"components/loyalty/PointsHistoryRow.jsx"},{"name":"PointsRange","sourcePath":"components/loyalty/PointsRange.jsx"},{"name":"QrCard","sourcePath":"components/loyalty/QrCard.jsx"},{"name":"TierReserve","sourcePath":"components/loyalty/TierReserve.jsx"},{"name":"AppBar","sourcePath":"components/navigation/AppBar.jsx"},{"name":"FaqItem","sourcePath":"components/navigation/FaqItem.jsx"},{"name":"ListRow","sourcePath":"components/navigation/ListRow.jsx"},{"name":"SegmentedControl","sourcePath":"components/navigation/SegmentedControl.jsx"},{"name":"StepIndicator","sourcePath":"components/navigation/StepIndicator.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"}],"sourceHashes":{"components/admin/DataTable.jsx":"b69f1b19bb74","components/admin/StatTile.jsx":"30e2b5ee0180","components/admin/StatusBadge.jsx":"eb0c99adea3f","components/admin/TrendBars.jsx":"7a783b5bbd2c","components/commerce/Carousel.jsx":"ab13bb69152a","components/commerce/CartLine.jsx":"0355059ed45d","components/commerce/CategoryTile.jsx":"948a9e704ef8","components/commerce/ProductTile.jsx":"a266dc5259ad","components/core/Button.jsx":"71da60378cc0","components/core/Card.jsx":"8ba4fcbe2540","components/core/Chip.jsx":"2c6b0b35948e","components/core/Divider.jsx":"98036bc2ff5d","components/core/IconButton.jsx":"c0614a8188db","components/core/KeyValueRow.jsx":"3a46ee68456e","components/core/SectionHeading.jsx":"cc4bb745eed2","components/core/Skeleton.jsx":"aa6de70debd1","components/feedback/Banner.jsx":"cb7f81066cf3","components/feedback/EmptyState.jsx":"0cd928dcb210","components/feedback/Sheet.jsx":"dec8b7270d42","components/feedback/Toast.jsx":"62551e5c1c44","components/forms/Checkbox.jsx":"a33a5792867b","components/forms/Field.jsx":"9b45015b84cc","components/forms/Radio.jsx":"b0b9c108ceba","components/forms/Stepper.jsx":"76da4859b987","components/forms/Switch.jsx":"77fe45a8ba3c","components/forms/TextInput.jsx":"108fe62d86b7","components/loyalty/PointsBalance.jsx":"9cecde58861b","components/loyalty/PointsHistoryRow.jsx":"28165bbaed9e","components/loyalty/PointsRange.jsx":"1ba765b3fb51","components/loyalty/QrCard.jsx":"1a6d0f054c16","components/loyalty/TierReserve.jsx":"813fe04f9257","components/navigation/AppBar.jsx":"f39b834b326f","components/navigation/FaqItem.jsx":"27e391d44af2","components/navigation/ListRow.jsx":"4b69cd2dbc25","components/navigation/SegmentedControl.jsx":"968045b2a03d","components/navigation/StepIndicator.jsx":"29481e551f75","components/navigation/TabBar.jsx":"db95a8e296e7","ui_kits/e24_app/app.jsx":"d5d45d3ada1a","ui_kits/e24_app/data.js":"9c72abbbbfa5","ui_kits/e24_app/screens_checkout.jsx":"b3c0fdcb0947","ui_kits/e24_app/screens_loyalty.jsx":"265b282b5bfa","ui_kits/e24_app/screens_shop.jsx":"ce5ee0d51e70","ui_kits/wellplus_admin/admin.jsx":"8fa15b5bdf69"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.E24WellPlusDesignSystem_54c90b = window.E24WellPlusDesignSystem_54c90b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/admin/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = [],
  onRowClick,
  emptyLabel = 'Nothing to show',
  style
}) {
  return React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 'var(--size-meta)',
      ...style
    }
  }, React.createElement('thead', null, React.createElement('tr', null, columns.map((c, i) => React.createElement('th', {
    key: i,
    style: {
      textAlign: c.align === 'right' ? 'right' : 'left',
      padding: '0 12px 8px',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--size-micro)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-chip)',
      color: 'var(--text-faint)',
      fontWeight: 'var(--weight-medium)',
      borderBottom: 'var(--border-width) solid var(--border-hairline)',
      whiteSpace: 'nowrap'
    }
  }, c.label)))), React.createElement('tbody', null, rows.length ? rows.map((r, ri) => React.createElement(AdminRow, {
    key: ri,
    row: r,
    columns,
    onRowClick
  })) : React.createElement('tr', null, React.createElement('td', {
    colSpan: columns.length,
    style: {
      padding: '32px 12px',
      textAlign: 'center',
      color: 'var(--text-muted)'
    }
  }, emptyLabel))));
}
function AdminRow({
  row,
  columns,
  onRowClick
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('tr', {
    onClick: onRowClick ? () => onRowClick(row) : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      cursor: onRowClick ? 'pointer' : 'default',
      background: hover && onRowClick ? 'var(--surface-sunken)' : 'transparent'
    }
  }, columns.map((c, ci) => React.createElement('td', {
    key: ci,
    style: {
      padding: '12px',
      borderBottom: 'var(--border-width) solid var(--border-hairline)',
      verticalAlign: 'top',
      textAlign: c.align === 'right' ? 'right' : 'left',
      whiteSpace: c.align === 'right' ? 'nowrap' : 'normal',
      fontVariantNumeric: c.align === 'right' ? 'tabular-nums' : 'normal'
    }
  }, typeof c.render === 'function' ? c.render(row) : row[c.key])));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/admin/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/admin/StatTile.jsx
try { (() => {
function StatTile({
  label,
  value,
  meta,
  tone,
  style
}) {
  const colors = {
    attention: 'var(--status-attention)',
    positive: 'var(--status-positive)',
    negative: 'var(--status-negative)'
  };
  return React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-width) solid var(--border-hairline)',
      borderRadius: 'var(--radius-admin)',
      padding: '16px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--size-chip)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-chip)',
      color: 'var(--text-faint)'
    }
  }, label), React.createElement('span', {
    style: {
      fontSize: '26px',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-title)',
      fontVariantNumeric: 'tabular-nums',
      color: tone ? colors[tone] : 'var(--text-body)'
    }
  }, value), meta ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--size-micro)',
      color: 'var(--text-faint)'
    }
  }, meta) : null);
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/admin/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/admin/StatusBadge.jsx
try { (() => {
const badgeTones = {
  ok: {
    bg: 'var(--status-positive-quiet)',
    fg: 'var(--status-positive)'
  },
  wait: {
    bg: 'var(--status-neutral-quiet)',
    fg: 'var(--status-neutral)'
  },
  attention: {
    bg: 'var(--status-attention-quiet)',
    fg: 'var(--status-attention)'
  },
  negative: {
    bg: 'var(--status-negative-quiet)',
    fg: 'var(--status-negative)'
  }
};
function StatusBadge({
  tone = 'wait',
  children,
  style
}) {
  const t = badgeTones[tone];
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--size-chip)',
      whiteSpace: 'nowrap',
      background: t.bg,
      color: t.fg,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/admin/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/admin/TrendBars.jsx
try { (() => {
function TrendBars({
  values = [],
  height = 56,
  highlightLast = true,
  style
}) {
  const max = Math.max(...values, 1);
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: '4px',
      height: height + 'px',
      ...style
    }
  }, values.map((v, i) => React.createElement('span', {
    key: i,
    style: {
      flex: 1,
      height: Math.max(2, v / max * height) + 'px',
      borderRadius: '3px 3px 0 0',
      background: highlightLast && i === values.length - 1 ? 'var(--sage-500)' : 'var(--sage-100)'
    }
  })));
}
Object.assign(__ds_scope, { TrendBars });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/admin/TrendBars.jsx", error: String((e && e.message) || e) }); }

// components/commerce/Carousel.jsx
try { (() => {
function Carousel({
  itemWidth = 160,
  gutter = 'var(--gutter-screen)',
  children,
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--gap-carousel)',
      overflowX: 'auto',
      scrollSnapType: 'x proximity',
      marginRight: 'calc(-1 * ' + gutter + ')',
      paddingRight: gutter,
      scrollbarWidth: 'none',
      ...style
    }
  }, React.Children.map(children, c => React.createElement('div', {
    style: {
      flex: '0 0 ' + itemWidth + 'px',
      scrollSnapAlign: 'start'
    }
  }, c)));
}
Object.assign(__ds_scope, { Carousel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/Carousel.jsx", error: String((e && e.message) || e) }); }

// components/commerce/CategoryTile.jsx
try { (() => {
function CategoryTile({
  label,
  icon = 'pill',
  image,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('div', {
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: hover ? 'var(--surface-brand-quiet)' : 'var(--surface-card)',
      border: 'var(--border-width) solid var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      padding: '14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'background var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, React.createElement('span', {
    style: {
      width: '38px',
      height: '38px',
      borderRadius: 'var(--radius-card-sm)',
      background: 'var(--surface-brand-quiet)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, image ? React.createElement('img', {
    src: image,
    alt: '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      padding: '6px'
    }
  }) : React.createElement('i', {
    className: 'ti ti-' + icon,
    style: {
      fontSize: '20px',
      color: 'var(--sage-500)'
    }
  })), React.createElement('span', {
    style: {
      fontSize: 'var(--size-label)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-snug)'
    }
  }, label));
}
Object.assign(__ds_scope, { CategoryTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CategoryTile.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductTile.jsx
try { (() => {
function ProductTile({
  image,
  name,
  size,
  price,
  badge,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('div', {
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-width) solid ' + (hover ? 'var(--border-brand)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-card)',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'border-color var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      position: 'relative',
      aspectRatio: '1/1',
      borderRadius: 'var(--radius-card-sm)',
      background: 'var(--ground)',
      overflow: 'hidden'
    }
  }, image ? React.createElement('img', {
    src: image,
    alt: '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      padding: '10%'
    }
  }) : null, badge ? React.createElement('span', {
    style: {
      position: 'absolute',
      top: '8px',
      left: '8px',
      padding: '3px 8px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-card)',
      border: 'var(--border-width) solid var(--sage-200)',
      color: 'var(--text-brand)',
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: 'var(--tracking-chip)'
    }
  }, badge) : null), React.createElement('div', {
    style: {
      fontSize: 'var(--size-label)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-snug)'
    }
  }, name), size ? React.createElement('div', {
    style: {
      fontSize: 'var(--size-micro)',
      color: 'var(--text-faint)',
      fontFamily: 'var(--font-label)'
    }
  }, size) : null, price ? React.createElement('div', {
    style: {
      fontSize: 'var(--size-meta)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-price)',
      fontVariantNumeric: 'tabular-nums',
      marginTop: 'auto'
    }
  }, price) : null);
}
Object.assign(__ds_scope, { ProductTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  fontFamily: 'var(--font-ui)',
  fontWeight: 'var(--weight-semibold)',
  borderRadius: 'var(--radius-pill)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--gap-inline)',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'background var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard),transform var(--dur-fast) var(--ease-standard)',
  border: 'var(--border-width) solid transparent',
  whiteSpace: 'nowrap'
};
const sizes = {
  md: {
    padding: '14px 20px',
    fontSize: 'var(--size-button)',
    minHeight: 'var(--tap-min)'
  },
  sm: {
    padding: '10px 16px',
    fontSize: '13.5px',
    minHeight: '36px'
  }
};
const looks = {
  primary: {
    background: 'var(--surface-brand)',
    color: 'var(--text-on-brand)',
    borderColor: 'var(--surface-brand)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-body)',
    borderColor: 'var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-secondary)'
  },
  accent: {
    background: 'var(--coral-500)',
    color: '#3A1E15',
    borderColor: 'var(--coral-500)'
  }
};
const hovers = {
  primary: {
    background: 'var(--sage-600)',
    borderColor: 'var(--sage-600)'
  },
  secondary: {
    borderColor: 'var(--ink-400)'
  },
  ghost: {
    background: 'var(--hover-tint)'
  },
  accent: {
    background: 'var(--coral-600)',
    borderColor: 'var(--coral-600)',
    color: '#FFF'
  }
};
const disabledLook = {
  background: 'var(--fill-2)',
  color: 'var(--text-faint)',
  borderColor: 'var(--line)',
  cursor: 'default'
};
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  icon,
  href,
  children,
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const look = disabled ? disabledLook : {
    ...looks[variant],
    ...(hover ? hovers[variant] : null)
  };
  const css = {
    ...base,
    ...sizes[size],
    ...look,
    width: fullWidth ? '100%' : 'auto',
    transform: down && !disabled ? 'scale(var(--press-scale))' : 'none',
    ...style
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return React.createElement(Tag, {
    href: href,
    style: css,
    disabled: Tag === 'button' ? disabled : undefined,
    'aria-disabled': disabled || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    onClick: disabled ? undefined : onClick,
    ...rest
  }, icon ? React.createElement('i', {
    className: 'ti ti-' + icon,
    style: {
      fontSize: '18px',
      lineHeight: 1
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  variant = 'paper',
  padding,
  children,
  style,
  onClick,
  ...rest
}) {
  const css = {
    background: variant === 'quiet' ? 'var(--surface-card-quiet)' : 'var(--surface-card)',
    border: 'var(--border-width) solid var(--border-hairline)',
    borderRadius: 'var(--radius-card)',
    padding: padding !== undefined ? padding : 'var(--pad-card)',
    cursor: onClick ? 'pointer' : undefined,
    ...style
  };
  return React.createElement('div', {
    style: css,
    onClick,
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
const chipTones = {
  outline: {
    background: 'transparent',
    borderColor: 'var(--border-strong)',
    color: 'var(--text-secondary)'
  },
  solid: {
    background: 'var(--surface-brand)',
    borderColor: 'var(--surface-brand)',
    color: 'var(--text-on-brand)'
  },
  quiet: {
    background: 'var(--surface-sunken)',
    borderColor: 'transparent',
    color: 'var(--text-secondary)'
  },
  brand: {
    background: 'var(--surface-brand-quiet)',
    borderColor: 'var(--sage-200)',
    color: 'var(--text-brand)'
  },
  accent: {
    background: 'var(--surface-accent-quiet)',
    borderColor: 'var(--coral-200)',
    color: 'var(--coral-600)'
  }
};
function Chip({
  tone = 'outline',
  icon,
  children,
  onClick,
  style
}) {
  const css = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    padding: '4px 10px',
    border: 'var(--border-width) solid',
    borderRadius: 'var(--radius-chip)',
    fontFamily: 'var(--font-label)',
    fontSize: 'var(--size-chip)',
    letterSpacing: 'var(--tracking-chip)',
    lineHeight: 1.4,
    cursor: onClick ? 'pointer' : 'default',
    ...chipTones[tone],
    ...style
  };
  return React.createElement(onClick ? 'button' : 'span', {
    style: css,
    onClick,
    type: onClick ? 'button' : undefined
  }, icon ? React.createElement('i', {
    className: 'ti ti-' + icon,
    style: {
      fontSize: '13px'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  style
}) {
  return React.createElement('div', {
    style: {
      height: '1px',
      background: 'var(--border-hairline)',
      margin: 'var(--space-3) 0',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  badge,
  onClick,
  href,
  size = 23,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const css = {
    width: '30px',
    height: '30px',
    flex: 'none',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: hover ? 'var(--text-brand)' : 'var(--text-body)',
    background: 'none',
    border: 0,
    padding: 0,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color var(--dur-fast) var(--ease-standard)',
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, {
    href,
    type: href ? undefined : 'button',
    'aria-label': label,
    style: css,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, React.createElement('i', {
    className: 'ti ti-' + icon,
    style: {
      fontSize: size + 'px',
      lineHeight: 1
    }
  }), badge ? React.createElement('span', {
    style: {
      position: 'absolute',
      top: '-4px',
      right: '-5px',
      minWidth: '16px',
      height: '16px',
      padding: '0 4px',
      background: 'var(--surface-brand)',
      color: 'var(--text-on-brand)',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-label)',
      fontSize: '9px',
      fontWeight: 'var(--weight-bold)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, badge) : null);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/KeyValueRow.jsx
try { (() => {
function KeyValueRow({
  label,
  value,
  total = false,
  tone,
  style
}) {
  const colors = {
    positive: 'var(--status-positive)',
    attention: 'var(--status-attention)',
    negative: 'var(--status-negative)'
  };
  return React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      padding: 'var(--space-3) 0',
      fontSize: total ? 'var(--size-total)' : 'var(--size-body)',
      ...style
    }
  }, React.createElement('span', {
    style: {
      color: total ? 'var(--text-body)' : 'var(--text-muted)',
      fontWeight: total ? 'var(--weight-semibold)' : 'var(--weight-regular)'
    }
  }, label), React.createElement('span', {
    style: {
      fontWeight: total ? 'var(--weight-bold)' : 'var(--weight-semibold)',
      fontVariantNumeric: 'tabular-nums',
      color: tone ? colors[tone] : 'var(--text-body)',
      textAlign: 'right'
    }
  }, value));
}
Object.assign(__ds_scope, { KeyValueRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/KeyValueRow.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  children,
  action,
  style
}) {
  const css = {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: 'var(--gap-inline)',
    margin: 'var(--space-3) 0 var(--space-1)',
    ...style
  };
  return React.createElement('div', {
    style: css
  }, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--size-section)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, children), action || null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Skeleton.jsx
try { (() => {
function Skeleton({
  width = '100%',
  height = 9,
  radius = 'var(--radius-pill)',
  style
}) {
  const id = 'e24-shimmer';
  return React.createElement(React.Fragment, null, React.createElement('style', null, '@keyframes ' + id + '{0%{background-position:100% 0}100%{background-position:-100% 0}}@media (prefers-reduced-motion:reduce){.' + id + '{animation:none!important}}'), React.createElement('div', {
    className: id,
    style: {
      width,
      height: typeof height === 'number' ? height + 'px' : height,
      borderRadius: radius,
      background: 'linear-gradient(90deg,var(--fill) 25%,var(--fill-2) 37%,var(--fill) 63%)',
      backgroundSize: '400% 100%',
      animation: id + ' var(--dur-skeleton) ease infinite',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
const bannerTones = {
  info: {
    bg: 'var(--surface-brand-quiet)',
    border: 'var(--sage-200)',
    fg: 'var(--text-brand)',
    icon: 'info-circle'
  },
  attention: {
    bg: 'var(--status-attention-quiet)',
    border: '#E8DAC6',
    fg: 'var(--status-attention)',
    icon: 'alert-circle'
  },
  negative: {
    bg: 'var(--status-negative-quiet)',
    border: 'var(--coral-200)',
    fg: 'var(--status-negative)',
    icon: 'circle-minus'
  },
  quiet: {
    bg: 'var(--surface-sunken)',
    border: 'var(--border-hairline)',
    fg: 'var(--text-secondary)',
    icon: 'info-circle'
  }
};
function Banner({
  tone = 'info',
  icon,
  children,
  style
}) {
  const t = bannerTones[tone];
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'flex-start',
      padding: '12px 14px',
      background: t.bg,
      border: 'var(--border-width) solid ' + t.border,
      borderRadius: 'var(--radius-card-sm)',
      fontSize: 'var(--size-meta)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-secondary)',
      ...style
    }
  }, React.createElement('i', {
    className: 'ti ti-' + (icon || t.icon),
    style: {
      fontSize: '17px',
      color: t.fg,
      flex: 'none',
      marginTop: '1px'
    }
  }), React.createElement('div', {
    style: {
      minWidth: 0
    }
  }, children));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function EmptyState({
  icon = 'package',
  title,
  description,
  action,
  style
}) {
  return React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 'var(--space-6)',
      padding: 'var(--space-14) var(--space-10)',
      ...style
    }
  }, React.createElement('span', {
    style: {
      width: '64px',
      height: '64px',
      borderRadius: 'var(--radius-card)',
      background: 'var(--surface-brand-quiet)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement('i', {
    className: 'ti ti-' + icon,
    style: {
      fontSize: '28px',
      color: 'var(--sage-300)'
    }
  })), React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 'var(--size-title)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-body)'
    }
  }, title), description ? React.createElement('div', {
    style: {
      fontSize: 'var(--size-body)',
      color: 'var(--text-muted)',
      marginTop: '6px',
      lineHeight: 'var(--leading-body)',
      maxWidth: '34ch'
    }
  }, description) : null), action || null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Sheet.jsx
try { (() => {
function Sheet({
  open = false,
  onClose,
  children,
  top = '9%',
  style
}) {
  return React.createElement(React.Fragment, null, React.createElement('div', {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 9,
      background: 'var(--scrim)',
      backdropFilter: 'var(--blur-scrim)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity var(--dur-base) var(--ease-standard)'
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: top,
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: 'var(--surface-page)',
      borderRadius: 'var(--radius-sheet) var(--radius-sheet) 0 0',
      boxShadow: 'var(--shadow-sheet)',
      transform: open ? 'translateY(0)' : 'translateY(100%)',
      transition: 'transform var(--dur-sheet) var(--ease-standard)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      width: '36px',
      height: '4px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--border-strong)',
      margin: '10px auto 0',
      flex: 'none'
    }
  }), onClose ? React.createElement('button', {
    type: 'button',
    onClick: onClose,
    'aria-label': 'Close',
    style: {
      position: 'absolute',
      top: '12px',
      right: '12px',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      background: 'var(--surface-sunken)',
      border: 0,
      color: 'var(--text-body)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement('i', {
    className: 'ti ti-x',
    style: {
      fontSize: '15px'
    }
  })) : null, React.createElement('div', {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--space-8)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Sheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Sheet.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  children,
  action,
  style
}) {
  return React.createElement('div', {
    style: {
      position: 'absolute',
      left: 'var(--gutter-screen)',
      right: 'var(--gutter-screen)',
      bottom: '14px',
      zIndex: 8,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: '13px 16px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--ink-900)',
      color: 'var(--ink-inverse)',
      fontSize: 'var(--size-meta)',
      boxShadow: 'var(--shadow-toast)',
      ...style
    }
  }, React.createElement('span', {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, children), action ? React.createElement('span', {
    style: {
      flex: 'none',
      fontWeight: 'var(--weight-semibold)',
      textDecoration: 'underline'
    }
  }, action) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked = false,
  label,
  description,
  disabled = false,
  onChange,
  style
}) {
  const box = {
    width: '20px',
    height: '20px',
    flex: 'none',
    borderRadius: '6px',
    position: 'relative',
    border: 'var(--border-width-strong) solid ' + (checked ? 'var(--sage-500)' : 'var(--border-strong)'),
    background: checked ? 'var(--sage-500)' : 'var(--surface-card)',
    transition: 'all var(--dur-fast) var(--ease-standard)'
  };
  return React.createElement('label', {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'flex-start',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    },
    onClick: disabled ? undefined : () => onChange && onChange(!checked)
  }, React.createElement('span', {
    style: box,
    role: 'checkbox',
    'aria-checked': checked
  }, checked ? React.createElement('i', {
    className: 'ti ti-check',
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: '14px'
    }
  }) : null), label ? React.createElement('span', {
    style: {
      minWidth: 0
    }
  }, React.createElement('span', {
    style: {
      display: 'block',
      fontSize: 'var(--size-body)',
      color: 'var(--text-body)'
    }
  }, label), description ? React.createElement('span', {
    style: {
      display: 'block',
      fontSize: 'var(--size-tiny)',
      color: 'var(--text-muted)',
      marginTop: '2px',
      lineHeight: 'var(--leading-body)'
    }
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  children,
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, label ? React.createElement('label', {
    style: {
      fontSize: 'var(--size-label)',
      color: 'var(--text-secondary)',
      fontWeight: 'var(--weight-medium)'
    }
  }, label) : null, children, error ? React.createElement('span', {
    style: {
      fontSize: 'var(--size-tiny)',
      color: 'var(--status-negative)'
    }
  }, error) : hint ? React.createElement('span', {
    style: {
      fontSize: 'var(--size-tiny)',
      color: 'var(--text-faint)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  checked = false,
  label,
  description,
  trailing,
  onChange,
  style
}) {
  const dot = {
    width: '20px',
    height: '20px',
    flex: 'none',
    borderRadius: '50%',
    position: 'relative',
    border: 'var(--border-width-strong) solid ' + (checked ? 'var(--sage-500)' : 'var(--border-strong)'),
    background: 'var(--surface-card)'
  };
  return React.createElement('label', {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'center',
      cursor: 'pointer',
      ...style
    },
    onClick: () => onChange && onChange(true)
  }, React.createElement('span', {
    style: dot,
    role: 'radio',
    'aria-checked': checked
  }, checked ? React.createElement('span', {
    style: {
      position: 'absolute',
      inset: '4px',
      background: 'var(--sage-500)',
      borderRadius: '50%'
    }
  }) : null), React.createElement('span', {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement('span', {
    style: {
      display: 'block',
      fontSize: 'var(--size-body)',
      color: 'var(--text-body)',
      fontWeight: 'var(--weight-medium)'
    }
  }, label), description ? React.createElement('span', {
    style: {
      display: 'block',
      fontSize: 'var(--size-tiny)',
      color: 'var(--text-muted)',
      marginTop: '2px'
    }
  }, description) : null), trailing ? React.createElement('span', {
    style: {
      fontSize: 'var(--size-body)',
      fontWeight: 'var(--weight-semibold)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, trailing) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Stepper.jsx
try { (() => {
function Stepper({
  value = 1,
  min = 1,
  max = 99,
  onChange,
  style
}) {
  const btn = {
    width: '36px',
    height: '36px',
    background: 'var(--surface-card)',
    border: 0,
    color: 'var(--text-body)',
    fontSize: '17px',
    cursor: 'pointer',
    lineHeight: 1
  };
  const step = d => {
    const n = Math.min(max, Math.max(min, value + d));
    if (n !== value && onChange) onChange(n);
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: 'var(--border-width) solid var(--border-strong)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      ...style
    }
  }, React.createElement('button', {
    type: 'button',
    style: {
      ...btn,
      opacity: value <= min ? .35 : 1
    },
    onClick: () => step(-1),
    'aria-label': 'Decrease'
  }, '−'), React.createElement('span', {
    style: {
      minWidth: '32px',
      textAlign: 'center',
      fontWeight: 'var(--weight-semibold)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: 'var(--size-body)'
    }
  }, value), React.createElement('button', {
    type: 'button',
    style: btn,
    onClick: () => step(1),
    'aria-label': 'Increase'
  }, '+'));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/commerce/CartLine.jsx
try { (() => {
function CartLine({
  image,
  name,
  size,
  unitPrice = 0,
  qty = 1,
  unavailable = false,
  onQty,
  onRemove,
  style
}) {
  const total = (unitPrice * qty).toFixed(2).replace('.', ',');
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      padding: 'var(--space-7) 0',
      borderBottom: 'var(--border-width) solid var(--border-hairline)',
      opacity: unavailable ? .55 : 1,
      ...style
    }
  }, React.createElement('span', {
    style: {
      width: '56px',
      height: '56px',
      flex: 'none',
      borderRadius: 'var(--radius-thumb)',
      background: 'var(--ground)',
      overflow: 'hidden'
    }
  }, image ? React.createElement('img', {
    src: image,
    alt: '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      padding: '6px'
    }
  }) : null), React.createElement('span', {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement('span', {
    style: {
      display: 'block',
      fontSize: 'var(--size-row-title)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, name), size ? React.createElement('span', {
    style: {
      display: 'block',
      fontSize: 'var(--size-tiny)',
      color: 'var(--text-muted)',
      marginTop: '2px'
    }
  }, size) : null, React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-4)'
    }
  }, unavailable ? React.createElement('button', {
    type: 'button',
    onClick: onRemove,
    style: {
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--size-chip)',
      color: 'var(--status-negative)'
    }
  }, 'Remove') : React.createElement(__ds_scope.Stepper, {
    value: qty,
    onChange: onQty
  }), React.createElement('b', {
    style: {
      fontSize: 'var(--size-body)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, unavailable ? '—' : '€' + total))));
}
Object.assign(__ds_scope, { CartLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CartLine.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  disabled = false,
  label,
  onChange,
  style
}) {
  const track = {
    display: 'inline-block',
    width: '44px',
    height: '26px',
    flex: 'none',
    borderRadius: 'var(--radius-pill)',
    position: 'relative',
    cursor: disabled ? 'default' : 'pointer',
    background: checked ? 'var(--sage-500)' : 'var(--fill-2)',
    border: 'var(--border-width) solid ' + (checked ? 'var(--sage-500)' : 'var(--border-strong)'),
    opacity: disabled ? .4 : 1,
    transition: 'background var(--dur-base) var(--ease-standard)'
  };
  const knob = {
    position: 'absolute',
    top: '2px',
    left: checked ? '20px' : '2px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: 'var(--paper)',
    boxShadow: 'var(--shadow-float)',
    transition: 'left var(--dur-base) var(--ease-standard)'
  };
  return React.createElement('span', {
    role: 'switch',
    'aria-checked': checked,
    'aria-label': label,
    style: {
      ...track,
      ...style
    },
    onClick: disabled ? undefined : () => onChange && onChange(!checked)
  }, React.createElement('span', {
    style: knob
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function TextInput({
  value,
  placeholder,
  type = 'text',
  invalid = false,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const css = {
    width: '100%',
    minHeight: 'var(--tap-min)',
    padding: '12px 14px',
    fontFamily: 'var(--font-ui)',
    fontSize: '14px',
    color: 'var(--text-body)',
    background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
    borderRadius: 'var(--radius-input)',
    border: 'var(--border-width) solid ' + (invalid ? 'var(--status-negative)' : focus ? 'var(--sage-500)' : 'var(--border-strong)'),
    outline: 'none',
    transition: 'border-color var(--dur-fast) var(--ease-standard)',
    ...style
  };
  return React.createElement('input', {
    type,
    value,
    placeholder,
    disabled,
    onChange,
    style: css,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    ...rest
  });
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/loyalty/PointsHistoryRow.jsx
try { (() => {
const hfmt = n => String(Math.abs(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
function PointsHistoryRow({
  date,
  channel,
  description,
  delta = 0,
  pending = false,
  style
}) {
  const positive = delta > 0;
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-6)',
      padding: 'var(--space-7) 0',
      borderBottom: 'var(--border-width) solid var(--border-hairline)',
      ...style
    }
  }, React.createElement('span', {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement('span', {
    style: {
      display: 'block',
      fontSize: 'var(--size-row-title)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-body)'
    }
  }, description), React.createElement('span', {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: '3px',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--size-micro)',
      color: 'var(--text-faint)'
    }
  }, React.createElement('span', null, date), channel ? React.createElement('span', null, '· ' + channel) : null)), React.createElement('span', {
    style: {
      flex: 'none',
      textAlign: 'right'
    }
  }, React.createElement('span', {
    style: {
      display: 'block',
      fontSize: 'var(--size-body)',
      fontWeight: 'var(--weight-semibold)',
      fontVariantNumeric: 'tabular-nums',
      color: pending ? 'var(--text-faint)' : positive ? 'var(--status-positive)' : 'var(--text-body)'
    }
  }, (positive ? '+' : '−') + hfmt(delta) + ' pts'), pending ? React.createElement('span', {
    style: {
      display: 'block',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--size-micro)',
      color: 'var(--text-faint)',
      marginTop: '2px'
    }
  }, 'processing') : null));
}
Object.assign(__ds_scope, { PointsHistoryRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/loyalty/PointsHistoryRow.jsx", error: String((e && e.message) || e) }); }

// components/loyalty/PointsRange.jsx
try { (() => {
const fmt = n => String(Math.abs(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
function PointsRange({
  balance = 0,
  threshold = 100,
  scaleMax,
  showScale = true,
  style
}) {
  const max = scaleMax || Math.max(threshold * 2, Math.ceil(Math.max(balance, threshold) / 500) * 500);
  const pct = v => Math.min(100, Math.max(0, v / max * 100));
  const filled = pct(Math.max(balance, 0));
  const tick = pct(threshold);
  const below = balance < threshold;
  return React.createElement('div', {
    style: {
      ...style
    }
  }, React.createElement('div', {
    style: {
      position: 'relative',
      height: '4px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--range-track)'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: filled + '%',
      borderRadius: 'var(--radius-pill)',
      background: balance < 0 ? 'var(--status-negative)' : 'var(--range-fill)',
      transition: 'width var(--dur-base) var(--ease-standard)'
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      left: tick + '%',
      top: '-4px',
      bottom: '-4px',
      width: '1px',
      background: 'var(--range-threshold)'
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      left: filled + '%',
      top: '-3px',
      width: '10px',
      height: '10px',
      marginLeft: '-5px',
      borderRadius: '50%',
      background: 'var(--surface-card)',
      border: 'var(--border-width-strong) solid ' + (balance < 0 ? 'var(--status-negative)' : 'var(--range-marker)')
    }
  })), showScale ? React.createElement('div', {
    style: {
      position: 'relative',
      height: '16px',
      marginTop: '8px',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--size-micro)',
      color: 'var(--text-faint)'
    }
  }, tick >= 14 ? React.createElement('span', {
    style: {
      position: 'absolute',
      left: 0
    }
  }, '0') : null, React.createElement('span', {
    style: tick < 8 ? {
      position: 'absolute',
      left: 0,
      whiteSpace: 'nowrap',
      color: below ? 'var(--text-secondary)' : 'var(--text-faint)'
    } : {
      position: 'absolute',
      left: tick + '%',
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
      color: below ? 'var(--text-secondary)' : 'var(--text-faint)'
    }
  }, fmt(threshold) + ' min'), React.createElement('span', {
    style: {
      position: 'absolute',
      right: 0
    }
  }, fmt(max))) : null);
}
Object.assign(__ds_scope, { PointsRange });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/loyalty/PointsRange.jsx", error: String((e && e.message) || e) }); }

// components/loyalty/QrCard.jsx
try { (() => {
const qfmt = n => String(Math.abs(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
function cells(seed, n) {
  const out = [];
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = h * 31 + seed.charCodeAt(i) >>> 0;
  for (let i = 0; i < n * n; i++) {
    h = h * 1103515245 + 12345 >>> 0;
    out.push((h >>> 16) % 100 < 46);
  }
  return out;
}
function QrCard({
  name,
  balance = 0,
  code = 'WP-0000-0000',
  offline = false,
  style
}) {
  const n = 21,
    grid = cells(code, n);
  const isFinder = (r, c) => r < 7 && c < 7 || r < 7 && c >= n - 7 || r >= n - 7 && c < 7;
  return React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-width) solid var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--pad-card-lg)',
      textAlign: 'center',
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      marginBottom: 'var(--space-7)',
      textAlign: 'left'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-club)',
      fontSize: 'var(--size-title)',
      color: name ? 'var(--text-body)' : 'var(--text-faint)'
    }
  }, name || 'No name yet'), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-numeric)',
      fontSize: 'var(--size-points-xs)',
      fontWeight: 'var(--weight-semibold)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, qfmt(balance), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-tiny)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--text-muted)',
      marginLeft: '4px'
    }
  }, 'pts'))), React.createElement('div', {
    style: {
      width: '196px',
      height: '196px',
      margin: '0 auto',
      padding: '14px',
      background: 'var(--paper)',
      border: 'var(--border-width) solid var(--border-hairline)',
      borderRadius: 'var(--radius-qr)',
      position: 'relative'
    }
  }, React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + n + ',1fr)',
      width: '100%',
      height: '100%',
      gap: '1px'
    }
  }, grid.map((on, i) => {
    const r = Math.floor(i / n),
      c = i % n;
    return React.createElement('span', {
      key: i,
      style: {
        background: isFinder(r, c) ? 'transparent' : on ? 'var(--ink-900)' : 'transparent',
        borderRadius: '1px'
      }
    });
  })), [['tl', {
    top: '14px',
    left: '14px'
  }], ['tr', {
    top: '14px',
    right: '14px'
  }], ['bl', {
    bottom: '14px',
    left: '14px'
  }]].map(([k, pos]) => React.createElement('span', {
    key: k,
    style: {
      position: 'absolute',
      width: '42px',
      height: '42px',
      border: '7px solid var(--ink-900)',
      borderRadius: '3px',
      ...pos
    }
  }))), React.createElement('div', {
    style: {
      marginTop: 'var(--space-7)',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--size-micro)',
      letterSpacing: 'var(--tracking-chip)',
      color: 'var(--text-faint)'
    }
  }, code), React.createElement('div', {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--size-tiny)',
      color: 'var(--text-secondary)'
    }
  }, 'Show this code at the register'), offline ? React.createElement('div', {
    style: {
      marginTop: 'var(--space-5)',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--size-micro)',
      color: 'var(--text-muted)'
    }
  }, 'Works offline') : null);
}
Object.assign(__ds_scope, { QrCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/loyalty/QrCard.jsx", error: String((e && e.message) || e) }); }

// components/loyalty/TierReserve.jsx
try { (() => {
function TierReserve({
  annotate = false,
  height = 40,
  style
}) {
  const css = {
    marginTop: 'var(--space-7)',
    minHeight: height + 'px',
    borderRadius: 'var(--radius-card-sm)',
    ...style
  };
  if (!annotate) return React.createElement('div', {
    'aria-hidden': 'true',
    style: css
  });
  return React.createElement('div', {
    'aria-hidden': 'true',
    style: {
      ...css,
      border: '1px dashed var(--border-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--size-micro)',
      letterSpacing: 'var(--tracking-chip)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, 'Reserved — tiers, Phase 2');
}
Object.assign(__ds_scope, { TierReserve });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/loyalty/TierReserve.jsx", error: String((e && e.message) || e) }); }

// components/loyalty/PointsBalance.jsx
try { (() => {
const pfmt = n => (n < 0 ? '−' : '') + String(Math.abs(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const eur = n => (n / 100).toFixed(2).replace('.', ',');
function PointsBalance({
  balance = 0,
  threshold = 100,
  note,
  state = 'default',
  compact = false,
  reserveTier = false,
  annotateReserve = false,
  style
}) {
  const loading = state === 'loading',
    pending = state === 'pending';
  const negative = balance < 0;
  return React.createElement('div', {
    style: {
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-5)'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--size-chip)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)'
    }
  }, 'WellPlus points'), pending ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--size-micro)',
      color: 'var(--text-faint)'
    }
  }, 'refreshing…') : null), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      margin: '12px 0 ' + (compact ? '0' : '14px')
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-numeric)',
      fontSize: compact ? 'var(--size-points-sm)' : 'var(--size-points)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-points)',
      fontVariantNumeric: 'tabular-nums',
      color: loading ? 'var(--text-faint)' : negative ? 'var(--status-negative)' : 'var(--text-body)'
    }
  }, loading ? '—' : pfmt(balance)), React.createElement('span', {
    style: {
      fontSize: 'var(--size-meta)',
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-medium)'
    }
  }, loading ? 'points refreshing' : balance > 0 ? 'points · ≈ €' + eur(balance) : 'points')), compact ? null : React.createElement(__ds_scope.PointsRange, {
    balance: loading ? 0 : balance,
    threshold
  }), note ? React.createElement('div', {
    style: {
      marginTop: 'var(--space-6)',
      fontSize: 'var(--size-tiny)',
      lineHeight: 'var(--leading-body)',
      color: negative ? 'var(--status-negative)' : 'var(--text-muted)'
    }
  }, note) : null, reserveTier ? React.createElement(__ds_scope.TierReserve, {
    annotate: annotateReserve
  }) : null);
}
Object.assign(__ds_scope, { PointsBalance });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/loyalty/PointsBalance.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AppBar.jsx
try { (() => {
function AppBar({
  title,
  onBack,
  actions,
  style
}) {
  return React.createElement('div', {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 4,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: '12px var(--gutter-screen)',
      background: 'var(--surface-page)',
      borderBottom: 'var(--border-width) solid var(--border-hairline)',
      ...style
    }
  }, onBack ? React.createElement('button', {
    type: 'button',
    'aria-label': 'Back',
    onClick: onBack,
    style: {
      width: '30px',
      height: '30px',
      marginLeft: '-8px',
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'none',
      border: 0,
      color: 'var(--text-body)',
      cursor: 'pointer'
    }
  }, React.createElement('i', {
    className: 'ti ti-chevron-left',
    style: {
      fontSize: '23px'
    }
  })) : null, React.createElement('span', {
    style: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-title)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-title)',
      color: 'var(--text-body)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, title), actions ? React.createElement('span', {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      flex: 'none'
    }
  }, actions) : null);
}
Object.assign(__ds_scope, { AppBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AppBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FaqItem.jsx
try { (() => {
function FaqItem({
  question,
  children,
  defaultOpen = false,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return React.createElement('div', {
    style: {
      borderBottom: 'var(--border-width) solid var(--border-hairline)',
      ...style
    }
  }, React.createElement('button', {
    type: 'button',
    onClick: () => setOpen(!open),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      padding: '14px 0',
      background: 'none',
      border: 0,
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--size-row-title)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-body)'
    }
  }, question, React.createElement('i', {
    className: 'ti ti-chevron-down',
    style: {
      fontSize: '17px',
      color: 'var(--text-faint)',
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-standard)'
    }
  })), React.createElement('div', {
    style: {
      maxHeight: open ? '320px' : 0,
      overflow: 'hidden',
      transition: 'max-height var(--dur-sheet) var(--ease-standard)'
    }
  }, React.createElement('div', {
    style: {
      padding: '0 0 14px',
      fontSize: 'var(--size-body)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-loose)'
    }
  }, children)));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ListRow.jsx
try { (() => {
function ListRow({
  thumb,
  title,
  subtitle,
  trailing,
  chevron = false,
  onClick,
  divider = true,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('div', {
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      padding: 'var(--pad-row) 0',
      cursor: onClick ? 'pointer' : 'default',
      borderBottom: divider ? 'var(--border-width) solid var(--border-hairline)' : 'none',
      background: hover && onClick ? 'var(--hover-tint)' : 'transparent',
      ...style
    }
  }, thumb ? React.createElement('span', {
    style: {
      width: '52px',
      height: '52px',
      flex: 'none',
      borderRadius: 'var(--radius-thumb)',
      background: 'var(--surface-sunken)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, typeof thumb === 'string' ? React.createElement('img', {
    src: thumb,
    alt: '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      padding: '4px'
    }
  }) : thumb) : null, React.createElement('span', {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement('span', {
    style: {
      display: 'block',
      fontSize: 'var(--size-row-title)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-body)'
    }
  }, title), subtitle ? React.createElement('span', {
    style: {
      display: 'block',
      fontSize: 'var(--size-tiny)',
      color: 'var(--text-muted)',
      marginTop: '3px'
    }
  }, subtitle) : null), trailing ? React.createElement('span', {
    style: {
      flex: 'none',
      fontSize: 'var(--size-body)',
      fontWeight: 'var(--weight-semibold)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, trailing) : null, chevron ? React.createElement('i', {
    className: 'ti ti-chevron-right',
    style: {
      fontSize: '17px',
      color: 'var(--text-faint)',
      flex: 'none'
    }
  }) : null);
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentedControl.jsx
try { (() => {
function SegmentedControl({
  options = [],
  value,
  onChange,
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      gap: 'var(--space-3)',
      ...style
    }
  }, options.map(o => {
    const on = o.value === value;
    return React.createElement('button', {
      key: o.value,
      type: 'button',
      onClick: () => onChange && onChange(o.value),
      style: {
        padding: '6px 14px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        fontFamily: 'var(--font-label)',
        fontSize: 'var(--size-chip)',
        letterSpacing: 'var(--tracking-chip)',
        border: 'var(--border-width) solid ' + (on ? 'var(--sage-500)' : 'var(--border-strong)'),
        background: on ? 'var(--surface-brand)' : 'transparent',
        color: on ? 'var(--text-on-brand)' : 'var(--text-secondary)'
      }
    }, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/navigation/StepIndicator.jsx
try { (() => {
function StepIndicator({
  steps = [],
  current = 0,
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      ...style
    }
  }, steps.map((s, i) => {
    const done = i < current,
      on = i === current;
    return React.createElement('span', {
      key: s,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: '4px 10px',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-label)',
        fontSize: 'var(--size-chip)',
        border: 'var(--border-width) solid ' + (on ? 'var(--sage-500)' : 'var(--border-hairline)'),
        background: on ? 'var(--surface-brand)' : done ? 'var(--surface-brand-quiet)' : 'transparent',
        color: on ? 'var(--text-on-brand)' : done ? 'var(--text-brand)' : 'var(--text-faint)'
      }
    }, done ? React.createElement('i', {
      className: 'ti ti-check',
      style: {
        fontSize: '12px'
      }
    }) : String(i + 1), on ? ' ' + s : done ? null : ' ' + s);
  }));
}
Object.assign(__ds_scope, { StepIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/StepIndicator.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
const E24_TABS = [{
  id: 'home',
  label: 'Home',
  icon: 'home'
}, {
  id: 'shop',
  label: 'Shop',
  icon: 'shopping-bag'
}, {
  id: 'card',
  label: 'Card',
  icon: 'qrcode'
}, {
  id: 'points',
  label: 'Points',
  icon: 'rosette-discount'
}, {
  id: 'profile',
  label: 'Profile',
  icon: 'user'
}];
function TabBar({
  active = 'home',
  tabs = E24_TABS,
  onSelect,
  style
}) {
  return React.createElement('nav', {
    style: {
      flex: 'none',
      display: 'grid',
      gridTemplateColumns: 'repeat(' + tabs.length + ',1fr)',
      background: 'var(--surface-card)',
      borderTop: 'var(--border-width) solid var(--border-hairline)',
      padding: '9px 2px 12px',
      ...style
    }
  }, tabs.map(t => {
    const on = t.id === active;
    return React.createElement('button', {
      key: t.id,
      type: 'button',
      onClick: () => onSelect && onSelect(t.id),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        padding: '2px 0',
        color: on ? 'var(--text-brand)' : 'var(--text-faint)',
        fontFamily: 'var(--font-label)',
        fontSize: '9.5px',
        letterSpacing: 'var(--tracking-chip)'
      }
    }, React.createElement('i', {
      className: 'ti ti-' + t.icon,
      style: {
        fontSize: '23px',
        lineHeight: 1
      }
    }), t.label);
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/e24_app/app.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  TabBar,
  Sheet,
  Toast
} = window.E24WellPlusDesignSystem_54c90b;
const AD = window.E24_DATA;
const TAB_OF = {
  home: "home",
  shop: "shop",
  product: "shop",
  cart: "shop",
  address: "shop",
  delivery: "shop",
  payment: "shop",
  review: "shop",
  confirmation: "shop",
  orders: "profile",
  points: "points",
  history: "points",
  profile: "profile",
  faq: "profile"
};
const NO_TAB = {
  address: 1,
  delivery: 1,
  payment: 1,
  review: 1,
  confirmation: 1,
  signin: 1
};
function App() {
  const [stack, setStack] = React.useState(["signin"]);
  const [product, setProduct] = React.useState(null);
  const [cart, setCart] = React.useState([{
    ...AD.products[10],
    qty: 1
  }, {
    ...AD.products[3],
    qty: 2
  }]);
  const [cardOpen, setCardOpen] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [balance, setBalance] = React.useState(AD.user.balance);
  const [usePoints, setUsePoints] = React.useState(false);
  const [delivery, setDelivery] = React.useState({
    id: "post",
    label: "Hrvatska pošta",
    desc: "2–3 working days",
    price: 4.30
  });
  const [payment, setPayment] = React.useState({
    id: "card",
    label: "Card",
    desc: "Visa · Mastercard · Maestro",
    points: true
  });
  const [lastOrder, setLastOrder] = React.useState({
    total: 0,
    earned: 0,
    id: "e24-104883"
  });
  const route = stack[stack.length - 1];
  const go = (r, p) => {
    if (p) setProduct(p);
    setStack(s => [...s, r]);
  };
  const back = () => setStack(s => s.length > 1 ? s.slice(0, -1) : s);
  const tab = t => setStack([t]);
  const subtotal = cart.reduce((s, l) => s + l.price * l.qty, 0);
  const gross = subtotal + delivery.price;
  const canRedeem = payment.points && balance >= 100;
  const discount = usePoints && canRedeem ? Math.min(balance / 100, gross) : 0;
  const addToCart = (p, qty) => {
    setCart(c => c.find(l => l.id === p.id) ? c.map(l => l.id === p.id ? {
      ...l,
      qty: l.qty + qty
    } : l) : [...c, {
      ...p,
      qty
    }]);
    setToast("Added to cart");
    setTimeout(() => setToast(null), 2600);
  };
  const setQty = (id, qty) => setCart(c => qty <= 0 ? c.filter(l => l.id !== id) : c.map(l => l.id === id ? {
    ...l,
    qty
  } : l));
  const confirmOrder = () => {
    const earned = discount > 0 ? 0 : Math.floor(subtotal);
    setBalance(b => b - Math.round(discount * 100) + earned);
    setLastOrder({
      total: gross - discount,
      earned,
      id: "e24-1048" + (80 + cart.length)
    });
    setCart([]);
    setUsePoints(false);
    setStack(["confirmation"]);
  };
  const cartCount = cart.reduce((s, l) => s + l.qty, 0);
  const openCard = () => setCardOpen(true);
  const nav = {
    go: r => r === "confirmation" ? confirmOrder() : go(r),
    back,
    openCard,
    cartCount,
    balance
  };
  let screen;
  if (route === "signin") screen = /*#__PURE__*/React.createElement(SignInScreen, {
    onSignIn: () => setStack(["home"])
  });else if (route === "home") screen = /*#__PURE__*/React.createElement(HomeScreen, nav);else if (route === "shop") screen = /*#__PURE__*/React.createElement(ShopScreen, nav);else if (route === "product") screen = /*#__PURE__*/React.createElement(ProductScreen, _extends({
    product: product,
    addToCart: addToCart
  }, nav));else if (route === "cart") screen = /*#__PURE__*/React.createElement(CartScreen, _extends({
    cart: cart,
    setQty: setQty
  }, nav));else if (route === "address") screen = /*#__PURE__*/React.createElement(AddressStep, nav);else if (route === "delivery") screen = /*#__PURE__*/React.createElement(DeliveryStep, _extends({
    delivery: delivery,
    setDelivery: setDelivery
  }, nav));else if (route === "payment") screen = /*#__PURE__*/React.createElement(PaymentStep, _extends({
    payment: payment,
    setPayment: setPayment
  }, nav));else if (route === "review") screen = /*#__PURE__*/React.createElement(ReviewStep, _extends({
    cart: cart,
    delivery: delivery,
    payment: payment,
    usePoints: usePoints,
    setUsePoints: setUsePoints
  }, nav));else if (route === "confirmation") screen = /*#__PURE__*/React.createElement(ConfirmationScreen, {
    total: lastOrder.total,
    earned: lastOrder.earned,
    orderId: lastOrder.id,
    go: tab
  });else if (route === "points") screen = /*#__PURE__*/React.createElement(PointsScreen, nav);else if (route === "history") screen = /*#__PURE__*/React.createElement(HistoryScreen, nav);else if (route === "profile") screen = /*#__PURE__*/React.createElement(ProfileScreen, _extends({
    onSignOut: () => setStack(["signin"])
  }, nav));else if (route === "orders") screen = /*#__PURE__*/React.createElement(OrdersScreen, nav);else if (route === "faq") screen = /*#__PURE__*/React.createElement(FaqScreen, nav);
  return /*#__PURE__*/React.createElement("div", {
    className: "device"
  }, /*#__PURE__*/React.createElement("div", {
    className: "statusbar"
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-antenna-bars-5"
  }), /*#__PURE__*/React.createElement("i", {
    className: "ti ti-wifi"
  }), /*#__PURE__*/React.createElement("i", {
    className: "ti ti-battery-3"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "viewport"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroller",
    key: route
  }, screen), toast ? /*#__PURE__*/React.createElement(Toast, {
    action: /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: "inherit"
      },
      onClick: e => {
        e.preventDefault();
        go("cart");
      }
    }, "Cart")
  }, toast) : null, /*#__PURE__*/React.createElement(Sheet, {
    open: cardOpen,
    onClose: () => setCardOpen(false),
    top: "14%"
  }, /*#__PURE__*/React.createElement(CardSheet, {
    balance: balance
  }))), NO_TAB[route] ? null : /*#__PURE__*/React.createElement(TabBar, {
    active: TAB_OF[route],
    onSelect: t => t === "card" ? openCard() : tab(t)
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/e24_app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/e24_app/data.js
try { (() => {
window.E24_DATA = {
  user: {
    name: "Marko Marković",
    email: "marko@example.com",
    balance: 1247,
    code: "WP-4417-8802"
  },
  categories: [{
    id: "vit",
    label: "Vitamins & minerals",
    icon: "pill"
  }, {
    id: "face",
    label: "Face & body care",
    icon: "droplet"
  }, {
    id: "baby",
    label: "Mom & baby",
    icon: "baby-carriage"
  }, {
    id: "otc",
    label: "Over-the-counter meds",
    icon: "vaccine-bottle"
  }],
  products: [{
    id: 1,
    name: "Vitamin C 1000 mg",
    size: "30 tablets",
    price: 8.99,
    img: "p6",
    badge: "PRIME"
  }, {
    id: 2,
    name: "Vitamin C + zinc",
    size: "20 tablets",
    price: 6.49,
    img: "p6"
  }, {
    id: 3,
    name: "Vitamin D3 400 IU",
    size: "100 softgels",
    price: 7.49,
    img: "p5"
  }, {
    id: 4,
    name: "Liquid Vitamin D3 2500 IU",
    size: "59 ml",
    price: 11.20,
    img: "p4",
    badge: "New"
  }, {
    id: 5,
    name: "Probiotic Complex",
    size: "30 capsules",
    price: 14.90,
    img: "p7"
  }, {
    id: 6,
    name: "Omega 3 Fish Oil",
    size: "60 softgels",
    price: 12.49,
    img: "p7"
  }, {
    id: 7,
    name: "Melatonin 3 mg",
    size: "60 tablets",
    price: 9.20,
    img: "p1"
  }, {
    id: 8,
    name: "Magnesium Glycinate",
    size: "90 capsules",
    price: 13.75,
    img: "p3",
    badge: "New"
  }, {
    id: 9,
    name: "Calcium Citrate + D3",
    size: "60 tablets",
    price: 10.30,
    img: "p2"
  }, {
    id: 10,
    name: "Ester-C Plus 500 mg",
    size: "50 capsules",
    price: 8.99,
    img: "p6"
  }, {
    id: 11,
    name: "Selenium 100 µg",
    size: "100 tablets",
    price: 12.99,
    img: "p1"
  }, {
    id: 12,
    name: "Beta-Carotene",
    size: "60 softgels",
    price: 9.90,
    img: "p7"
  }],
  history: [{
    date: "18 Aug 2026",
    channel: "Store · Split, Vukovarska",
    description: "Purchase",
    delta: 52
  }, {
    date: "20 Aug 2026",
    channel: "Store · Split, Poljička",
    description: "Purchase",
    delta: 41,
    pending: true
  }, {
    date: "12 Aug 2026",
    channel: "App",
    description: "Redeemed at checkout",
    delta: -640
  }, {
    date: "09 Aug 2026",
    channel: "e24.hr",
    description: "Purchase",
    delta: 128
  }, {
    date: "02 Aug 2026",
    channel: "Centar zdravih rješenja",
    description: "Purchase",
    delta: 74
  }, {
    date: "01 Aug 2026",
    channel: "App",
    description: "Welcome bonus",
    delta: 50
  }],
  orders: [{
    id: "e24-104882",
    date: "18 Aug 2026",
    total: 46.27,
    status: "On delivery",
    items: 3
  }, {
    id: "e24-103511",
    date: "02 Aug 2026",
    total: 27.40,
    status: "Delivered",
    items: 2
  }, {
    id: "e24-101204",
    date: "14 Jul 2026",
    total: 61.85,
    status: "Delivered",
    items: 5
  }]
};
window.E24_FMT = {
  eur: n => "€" + n.toFixed(2).replace(".", ","),
  pts: n => (n < 0 ? "−" : "") + String(Math.abs(n)).replace(/\B(?=(\d{3})+(?!\d))/g, "."),
  img: id => "../../assets/products/" + id + ".png"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/e24_app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/e24_app/screens_checkout.jsx
try { (() => {
const {
  AppBar,
  Card,
  SectionHeading,
  Button,
  Chip,
  Banner,
  Divider,
  KeyValueRow,
  Field,
  TextInput,
  Radio,
  Switch,
  StepIndicator,
  ListRow,
  EmptyState,
  PointsBalance
} = window.E24WellPlusDesignSystem_54c90b;
const {
  eur,
  pts,
  img
} = window.E24_FMT;
const CD = window.E24_DATA;
const stepPad = {
  padding: "0 var(--gutter-screen) 28px",
  display: "flex",
  flexDirection: "column",
  gap: "var(--stack-screen)"
};
const STEPS = ["Address", "Delivery", "Payment", "Review"];
function CheckoutFrame({
  step,
  onBack,
  children,
  footer
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(AppBar, {
    title: ["Address", "Delivery", "Payment", "Order review"][step],
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...stepPad,
      flex: 1,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--stack-screen)"
    }
  }, /*#__PURE__*/React.createElement(StepIndicator, {
    steps: STEPS,
    current: step
  })), children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      padding: "12px var(--gutter-screen)",
      background: "var(--surface-card)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, footer) : null);
}
function AddressStep({
  go,
  back
}) {
  const [pick, setPick] = React.useState("home");
  return /*#__PURE__*/React.createElement(CheckoutFrame, {
    step: 0,
    onBack: back,
    footer: /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      onClick: () => go("delivery")
    }, "Continue to delivery")
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, null, "Saved addresses"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 14,
    style: {
      borderColor: pick === "home" ? "var(--border-brand)" : "var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    checked: pick === "home",
    onChange: () => setPick("home"),
    label: "Vukovarska 24, 21000 Split",
    description: "Marko Markovi\u0107 \xB7 +385 91 234 5678"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 14,
    style: {
      borderColor: pick === "work" ? "var(--border-brand)" : "var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    checked: pick === "work",
    onChange: () => setPick("work"),
    label: "Polji\u010Dka cesta 47, 21000 Split",
    description: "Work \xB7 weekdays only"
  })))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "plus",
    fullWidth: true
  }, "Add a new address"), /*#__PURE__*/React.createElement("p", {
    className: "e24-tiny",
    style: {
      margin: 0
    }
  }, "Your name on the WellPlus card comes from this address \u2014 it is not collected at registration."));
}
function DeliveryStep({
  go,
  back,
  setDelivery,
  delivery
}) {
  const options = [{
    id: "post",
    label: "Hrvatska pošta",
    desc: "2–3 working days",
    price: 4.30
  }, {
    id: "dpd",
    label: "DPD parcel locker",
    desc: "Choose a locker at the next step",
    price: 3.50
  }, {
    id: "courier",
    label: "DPD courier",
    desc: "Next working day, 8–17h",
    price: 5.20
  }];
  return /*#__PURE__*/React.createElement(CheckoutFrame, {
    step: 1,
    onBack: back,
    footer: /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      onClick: () => go("payment")
    }, "Continue to payment")
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, null, "Delivery method"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      marginTop: "var(--space-5)"
    }
  }, options.map(o => /*#__PURE__*/React.createElement(Card, {
    key: o.id,
    padding: 14,
    style: {
      borderColor: delivery.id === o.id ? "var(--border-brand)" : "var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    checked: delivery.id === o.id,
    onChange: () => setDelivery(o),
    label: o.label,
    description: o.desc,
    trailing: eur(o.price)
  }))))), /*#__PURE__*/React.createElement(Banner, {
    tone: "quiet"
  }, "Pharmacy pickup is not part of this release."));
}
function PaymentStep({
  go,
  back,
  payment,
  setPayment
}) {
  const methods = [{
    id: "card",
    label: "Card",
    desc: "Visa · Mastercard · Maestro",
    points: true
  }, {
    id: "gpay",
    label: "Google Pay",
    desc: "",
    points: true
  }, {
    id: "keks",
    label: "KEKS Pay",
    desc: "",
    points: true
  }, {
    id: "aircash",
    label: "Aircash",
    desc: "",
    points: true
  }, {
    id: "paycek",
    label: "PayCek",
    desc: "",
    points: true
  }, {
    id: "transfer",
    label: "Bank transfer",
    desc: "Points cannot be used with this method",
    points: false
  }, {
    id: "cod",
    label: "Cash on delivery",
    desc: "Points cannot be used with this method",
    points: false
  }];
  return /*#__PURE__*/React.createElement(CheckoutFrame, {
    step: 2,
    onBack: back,
    footer: /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      onClick: () => go("review")
    }, "Continue to review")
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, null, "Payment method"), /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      marginTop: "var(--space-5)",
      padding: "4px 14px"
    }
  }, methods.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    style: {
      padding: "10px 0",
      borderBottom: i < methods.length - 1 ? "1px solid var(--border-hairline)" : "none"
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    checked: payment.id === m.id,
    onChange: () => setPayment(m),
    label: m.label,
    description: m.desc
  }))))));
}
function ReviewStep({
  cart,
  go,
  back,
  delivery,
  payment,
  balance,
  usePoints,
  setUsePoints
}) {
  const subtotal = cart.reduce((s, l) => s + l.price * l.qty, 0);
  const gross = subtotal + delivery.price;
  const canRedeem = payment.points && balance >= 100;
  const discount = usePoints && canRedeem ? Math.min(balance / 100, gross) : 0;
  const total = gross - discount;
  const spent = Math.round(discount * 100);
  return /*#__PURE__*/React.createElement(CheckoutFrame, {
    step: 3,
    onBack: back,
    footer: /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      onClick: () => go("confirmation")
    }, "Confirm order \xB7 ", eur(total))
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, null, "Items"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-3)"
    }
  }, cart.map(l => /*#__PURE__*/React.createElement(ListRow, {
    key: l.id,
    thumb: img(l.img),
    title: l.name + " ×" + l.qty,
    subtitle: l.size,
    trailing: eur(l.price * l.qty)
  })))), /*#__PURE__*/React.createElement(Card, {
    variant: "quiet"
  }, /*#__PURE__*/React.createElement(KeyValueRow, {
    label: "Address",
    value: "Vukovarska 24, Split"
  }), /*#__PURE__*/React.createElement(KeyValueRow, {
    label: "Delivery",
    value: delivery.label + " · " + eur(delivery.price)
  }), /*#__PURE__*/React.createElement(KeyValueRow, {
    label: "Payment",
    value: payment.label
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: "var(--size-row-title)"
    }
  }, "Use my points"), /*#__PURE__*/React.createElement("div", {
    className: "e24-tiny",
    style: {
      marginTop: "2px"
    }
  }, pts(balance), " pts available \xB7 \u2248 ", eur(balance / 100))), /*#__PURE__*/React.createElement(Switch, {
    checked: usePoints && canRedeem,
    disabled: !canRedeem,
    onChange: setUsePoints,
    label: "Use my points"
  })), !payment.points ? /*#__PURE__*/React.createElement(Banner, {
    tone: "attention",
    style: {
      marginTop: "var(--space-6)"
    }
  }, "Not available with ", /*#__PURE__*/React.createElement("b", null, payment.label), ". Go back to payment and choose Card, Google Pay or another supported method.") : usePoints ? /*#__PURE__*/React.createElement("p", {
    className: "e24-tiny",
    style: {
      margin: "var(--space-6) 0 0"
    }
  }, discount * 100 < balance ? /*#__PURE__*/React.createElement(React.Fragment, null, "Discount capped at the order total \u2014 ", pts(spent), " of ", pts(balance), " pts used, ", pts(balance - spent), " pts remain for next time.") : /*#__PURE__*/React.createElement(React.Fragment, null, "Applies all your points as a discount, capped at the order total.")) : /*#__PURE__*/React.createElement("p", {
    className: "e24-tiny",
    style: {
      margin: "var(--space-6) 0 0"
    }
  }, "One switch, no amount to enter. Turning it on spends all available points, capped at the order value.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(KeyValueRow, {
    label: "Subtotal",
    value: eur(subtotal)
  }), /*#__PURE__*/React.createElement(KeyValueRow, {
    label: "Delivery",
    value: eur(delivery.price)
  }), discount > 0 && /*#__PURE__*/React.createElement(KeyValueRow, {
    label: "Points discount",
    value: "−" + eur(discount) + " (" + pts(spent) + " pts)",
    tone: "positive"
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(KeyValueRow, {
    label: "Total",
    value: eur(total),
    total: true
  }), /*#__PURE__*/React.createElement("p", {
    className: "e24-tiny",
    style: {
      margin: "var(--space-5) 0 0"
    }
  }, discount > 0 ? "This purchase earns no points — a purchase paid for using points doesn't earn more." : /*#__PURE__*/React.createElement(React.Fragment, null, "This purchase earns ", /*#__PURE__*/React.createElement("b", null, Math.floor(subtotal), " points"), " \u2014 1 point per \u20AC1 on the product subtotal, delivery excluded."))));
}
function ConfirmationScreen({
  go,
  total,
  earned,
  orderId
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppBar, {
    title: "Order placed"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...stepPad,
      alignItems: "center",
      textAlign: "center",
      paddingTop: "var(--space-14)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "var(--surface-brand-quiet)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-check",
    style: {
      fontSize: 30,
      color: "var(--sage-500)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "e24-lead"
  }, "Thank you \u2014 your order is confirmed"), /*#__PURE__*/React.createElement("p", {
    className: "e24-body",
    style: {
      margin: 0
    }
  }, "Order ", /*#__PURE__*/React.createElement("b", null, orderId), " \xB7 ", eur(total), /*#__PURE__*/React.createElement("br", null), "A confirmation is on its way to ", CD.user.email, "."), /*#__PURE__*/React.createElement(Card, {
    style: {
      width: "100%",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(KeyValueRow, {
    label: "Points earned",
    value: earned ? "+" + pts(earned) + " pts" : "none — paid with points",
    tone: earned ? "positive" : undefined
  }), /*#__PURE__*/React.createElement(KeyValueRow, {
    label: "Expected delivery",
    value: "Wed, 26 Aug"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    onClick: () => go("orders")
  }, "Track this order"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    fullWidth: true,
    onClick: () => go("home")
  }, "Back to home")));
}
Object.assign(window, {
  AddressStep,
  DeliveryStep,
  PaymentStep,
  ReviewStep,
  ConfirmationScreen,
  CheckoutFrame
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/e24_app/screens_checkout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/e24_app/screens_loyalty.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  AppBar,
  Card,
  SectionHeading,
  Button,
  Chip,
  Banner,
  Divider,
  KeyValueRow,
  ListRow,
  IconButton,
  PointsBalance,
  PointsRange,
  PointsHistoryRow,
  QrCard,
  TierReserve,
  EmptyState,
  FaqItem,
  Switch
} = window.E24WellPlusDesignSystem_54c90b;
const {
  eur,
  pts,
  img
} = window.E24_FMT;
const L = window.E24_DATA;
const lPad = {
  padding: "0 var(--gutter-screen) 28px",
  display: "flex",
  flexDirection: "column",
  gap: "var(--stack-screen)"
};
function PointsScreen({
  go,
  openCard,
  balance,
  cartCount
}) {
  const note = balance < 0 ? "A refund exceeded your available balance. This can't go any lower — future purchases bring it back up to zero, then beyond." : balance === 0 ? "Start earning — your first purchase or store visit earns points." : balance < 100 ? 100 - balance + " points to your first redemption (100 minimum)." : "Points never expire.";
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppBar, {
    title: "Points",
    actions: /*#__PURE__*/React.createElement(IconButton, {
      icon: "shopping-cart",
      label: "Cart",
      badge: cartCount || undefined,
      onClick: () => go("cart")
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: lPad
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: "var(--stack-screen)"
    }
  }, /*#__PURE__*/React.createElement(PointsBalance, {
    balance: balance,
    note: note,
    reserveTier: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, null, "How points are earned"), /*#__PURE__*/React.createElement(Card, {
    variant: "quiet",
    style: {
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("ul", {
    className: "e24-body",
    style: {
      margin: 0,
      paddingLeft: 18,
      lineHeight: "var(--leading-loose)"
    }
  }, /*#__PURE__*/React.createElement("li", null, "\u20AC1 spent = 1 point, in all 21 pharmacies \u2014 show the QR code at the register"), /*#__PURE__*/React.createElement("li", null, "Purchases on e24.hr and in this app"), /*#__PURE__*/React.createElement("li", null, "Centar zdravih rje\u0161enja")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, null, "How to redeem"), /*#__PURE__*/React.createElement(Card, {
    variant: "quiet",
    style: {
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("ul", {
    className: "e24-body",
    style: {
      margin: 0,
      paddingLeft: 18,
      lineHeight: "var(--leading-loose)"
    }
  }, /*#__PURE__*/React.createElement("li", null, "100 points = \u20AC1, redeemable from 100 points upward"), /*#__PURE__*/React.createElement("li", null, "In the app: one switch at checkout \u2014 no amount to type in"), /*#__PURE__*/React.createElement("li", null, "In store: just tell the cashier you'd like to use your points")))), balance < 100 && /*#__PURE__*/React.createElement(Banner, {
    tone: "quiet"
  }, "Redemption isn't available at this balance \u2014 you'll need at least 100 points."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      flex: 1
    },
    onClick: () => go("history")
  }, "Points history"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      flex: 1
    },
    icon: "qrcode",
    onClick: openCard
  }, "My card"))));
}
function HistoryScreen({
  back,
  balance
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppBar, {
    title: "Points history",
    onBack: back
  }), /*#__PURE__*/React.createElement("div", {
    style: lPad
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: "var(--stack-screen)"
    }
  }, /*#__PURE__*/React.createElement(PointsBalance, {
    balance: balance,
    compact: true
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(PointsRange, {
    balance: balance
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, null, "All movements"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-3)"
    }
  }, L.history.map((h, i) => /*#__PURE__*/React.createElement(PointsHistoryRow, _extends({
    key: i
  }, h))))), /*#__PURE__*/React.createElement("p", {
    className: "e24-tiny",
    style: {
      margin: 0
    }
  }, "In-store purchases can take a few hours to settle. Nothing expires.")));
}
function CardSheet({
  balance
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--stack-screen)"
    }
  }, /*#__PURE__*/React.createElement(QrCard, {
    name: L.user.name,
    balance: balance,
    code: L.user.code
  }), /*#__PURE__*/React.createElement("p", {
    className: "e24-tiny",
    style: {
      margin: 0,
      textAlign: "center"
    }
  }, "100+ points? Tell the cashier you'd like to redeem \u2014 no step in the app needed."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    icon: "wallet"
  }, "Add to Apple / Google Wallet"), /*#__PURE__*/React.createElement("p", {
    className: "e24-tiny",
    style: {
      margin: 0,
      textAlign: "center",
      color: "var(--text-faint)"
    }
  }, "Works offline \u2014 the code is stored on this device."));
}
function ProfileScreen({
  go,
  openCard,
  balance,
  cartCount,
  onSignOut
}) {
  const rows = [["My orders", "orders"], ["Personal details", null], ["Consents", null], ["Security & sign-in", null], ["Terms of use", null], ["Privacy policy", null], ["FAQ", "faq"], ["Contact us", null], ["About", null]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppBar, {
    title: "Profile",
    actions: /*#__PURE__*/React.createElement(IconButton, {
      icon: "shopping-cart",
      label: "Cart",
      badge: cartCount || undefined,
      onClick: () => go("cart")
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: lPad
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: "var(--stack-screen)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: "50%",
      background: "var(--surface-brand-quiet)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-user",
    style: {
      fontSize: 24,
      color: "var(--sage-500)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: "var(--font-club)",
      fontSize: "var(--size-title)"
    }
  }, L.user.name), /*#__PURE__*/React.createElement("div", {
    className: "e24-tiny"
  }, L.user.email))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(PointsBalance, {
    balance: balance,
    compact: true
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      padding: "4px var(--pad-card)"
    }
  }, rows.map(([label, route], i) => /*#__PURE__*/React.createElement(ListRow, {
    key: label,
    title: label,
    chevron: true,
    divider: i < rows.length - 1,
    onClick: () => route && go(route)
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    onClick: onSignOut
  }, "Sign out")));
}
function OrdersScreen({
  back,
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppBar, {
    title: "My orders",
    onBack: back
  }), /*#__PURE__*/React.createElement("div", {
    style: lPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--stack-screen)"
    }
  }, L.orders.map(o => /*#__PURE__*/React.createElement(ListRow, {
    key: o.id,
    title: o.id,
    subtitle: o.date + " · " + o.items + " items",
    trailing: /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", null, eur(o.total)), /*#__PURE__*/React.createElement(Chip, {
      tone: o.status === "Delivered" ? "quiet" : "brand"
    }, o.status)),
    onClick: () => {}
  })))));
}
function FaqScreen({
  back
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppBar, {
    title: "FAQ",
    onBack: back
  }), /*#__PURE__*/React.createElement("div", {
    style: lPad
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: "var(--stack-screen)"
    }
  }, /*#__PURE__*/React.createElement(FaqItem, {
    question: "Do my points expire?",
    defaultOpen: true
  }, "No. A pharmacy is not a weekly shop, so your balance stays on your account indefinitely."), /*#__PURE__*/React.createElement(FaqItem, {
    question: "How much is a point worth?"
  }, "100 points = \u20AC1. You can redeem from 100 points upward, and there is no upper cap."), /*#__PURE__*/React.createElement(FaqItem, {
    question: "Where do points come from?"
  }, "Purchases in the 21 pharmacies, on e24.hr, in this app, and at Centar zdravih rje\u0161enja. \u20AC1 spent = 1 point."), /*#__PURE__*/React.createElement(FaqItem, {
    question: "How do I use points in a pharmacy?"
  }, "Show the QR code from your card and tell the cashier you'd like to use your points. The till applies the discount; nothing to do in the app."), /*#__PURE__*/React.createElement(FaqItem, {
    question: "Why does my balance say it is processing?"
  }, "In-store purchases settle a few hours after the visit. The points are counted, they are just not visible yet."))));
}
function SignInScreen({
  onSignIn
}) {
  const {
    Field,
    TextInput
  } = window.E24WellPlusDesignSystem_54c90b;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...lPad,
      height: "100%",
      justifyContent: "center",
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 30,
      fontWeight: 700,
      letterSpacing: "-.03em"
    }
  }, "e24"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-club)",
      fontSize: 15,
      color: "var(--text-brand)",
      marginTop: 4
    }
  }, "with WellPlus")), /*#__PURE__*/React.createElement(Field, {
    label: "E-mail"
  }, /*#__PURE__*/React.createElement(TextInput, {
    value: "marko@example.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Password"
  }, /*#__PURE__*/React.createElement(TextInput, {
    type: "password",
    value: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7"
  })), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: onSignIn
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    fullWidth: true
  }, "Create an account"), /*#__PURE__*/React.createElement("p", {
    className: "e24-tiny",
    style: {
      margin: 0,
      textAlign: "center"
    }
  }, "Croatian only. Ljekarne \u0160valjek \xB7 21 pharmacies."));
}
Object.assign(window, {
  PointsScreen,
  HistoryScreen,
  CardSheet,
  ProfileScreen,
  OrdersScreen,
  FaqScreen,
  SignInScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/e24_app/screens_loyalty.jsx", error: String((e && e.message) || e) }); }

// ui_kits/e24_app/screens_shop.jsx
try { (() => {
const {
  AppBar,
  TabBar,
  Card,
  SectionHeading,
  Button,
  Chip,
  IconButton,
  Banner,
  Divider,
  KeyValueRow,
  ProductTile,
  CategoryTile,
  Carousel,
  CartLine,
  PointsBalance,
  PointsRange,
  TierReserve,
  EmptyState,
  ListRow
} = window.E24WellPlusDesignSystem_54c90b;
const {
  eur,
  pts,
  img
} = window.E24_FMT;
const D = window.E24_DATA;
const screenPad = {
  padding: "0 var(--gutter-screen) 28px",
  display: "flex",
  flexDirection: "column",
  gap: "var(--stack-screen)"
};
function HomeScreen({
  go,
  cartCount,
  openCard
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppBar, {
    title: "Good day, " + D.user.name.split(" ")[0],
    actions: /*#__PURE__*/React.createElement(IconButton, {
      icon: "shopping-cart",
      label: "Cart",
      badge: cartCount || undefined,
      onClick: () => go("cart")
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: screenPad
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: "var(--stack-screen)"
    }
  }, /*#__PURE__*/React.createElement(PointsBalance, {
    balance: D.user.balance,
    note: /*#__PURE__*/React.createElement(React.Fragment, null, "Points never expire \u2014 spend them at checkout or at the register. ", /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("points");
      }
    }, "Details \u203A")),
    reserveTier: true
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "qrcode",
    fullWidth: true,
    onClick: openCard
  }, "My card (QR)"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, null, "Categories"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--gap-grid)",
      marginTop: "var(--space-5)"
    }
  }, D.categories.map(c => /*#__PURE__*/React.createElement(CategoryTile, {
    key: c.id,
    label: c.label,
    icon: c.icon,
    onClick: () => go("shop")
  })))), /*#__PURE__*/React.createElement(Shelf, {
    title: "Top rated in beauty",
    items: D.products.slice(0, 4),
    go: go
  }), /*#__PURE__*/React.createElement(Shelf, {
    title: "New arrivals",
    items: D.products.slice(4, 8),
    go: go
  }), /*#__PURE__*/React.createElement(Shelf, {
    title: "Frequently repurchased",
    items: D.products.slice(8, 12),
    go: go
  })));
}
function Shelf({
  title,
  items,
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, null, title), /*#__PURE__*/React.createElement(Carousel, {
    style: {
      marginTop: "var(--space-5)"
    }
  }, items.map(p => /*#__PURE__*/React.createElement(ProductTile, {
    key: p.id,
    image: img(p.img),
    name: p.name,
    size: p.size,
    price: eur(p.price),
    badge: p.badge,
    onClick: () => go("product", p)
  }))));
}
function ShopScreen({
  go,
  cartCount
}) {
  const [query, setQuery] = React.useState("");
  const list = query ? D.products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : D.products;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppBar, {
    title: "Shop",
    actions: /*#__PURE__*/React.createElement(IconButton, {
      icon: "shopping-cart",
      label: "Cart",
      badge: cartCount || undefined,
      onClick: () => go("cart")
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: screenPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      marginTop: "var(--stack-screen)",
      padding: "12px 16px",
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-pill)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-search",
    style: {
      fontSize: 17,
      color: "var(--text-faint)"
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Search products\u2026",
    style: {
      border: 0,
      outline: "none",
      background: "none",
      font: "inherit",
      fontSize: "14px",
      flex: 1,
      minWidth: 0,
      color: "var(--text-body)"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, null, "Categories"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--gap-grid)",
      marginTop: "var(--space-5)"
    }
  }, D.categories.map(c => /*#__PURE__*/React.createElement(CategoryTile, {
    key: c.id,
    label: c.label,
    icon: c.icon,
    onClick: () => setQuery("")
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    action: /*#__PURE__*/React.createElement("span", {
      className: "mono-micro"
    }, list.length, " products")
  }, query ? "Results" : "All products"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--gap-grid)",
      marginTop: "var(--space-5)"
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProductTile, {
    key: p.id,
    image: img(p.img),
    name: p.name,
    size: p.size,
    price: eur(p.price),
    badge: p.badge,
    onClick: () => go("product", p)
  }))), !list.length && /*#__PURE__*/React.createElement(EmptyState, {
    icon: "search",
    title: "Nothing matches that",
    description: "Try a shorter search, or browse a category."
  }))));
}
function ProductScreen({
  product,
  go,
  back,
  addToCart,
  cartCount
}) {
  const [qty, setQty] = React.useState(1);
  const {
    Stepper
  } = window.E24WellPlusDesignSystem_54c90b;
  const p = product || D.products[0];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppBar, {
    title: "Product",
    onBack: back,
    actions: /*#__PURE__*/React.createElement(IconButton, {
      icon: "shopping-cart",
      label: "Cart",
      badge: cartCount || undefined,
      onClick: () => go("cart")
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: screenPad
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--stack-screen)",
      aspectRatio: "1/1",
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-card)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img(p.img),
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      padding: "12%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, p.badge && /*#__PURE__*/React.createElement(Chip, {
    tone: "brand"
  }, p.badge), /*#__PURE__*/React.createElement(Chip, {
    tone: "solid"
  }, "Available")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "e24-lead"
  }, p.name, ", ", p.size), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--size-total)",
      fontWeight: 700,
      marginTop: "var(--space-4)",
      fontVariantNumeric: "tabular-nums"
    }
  }, eur(p.price * qty)), /*#__PURE__*/React.createElement("div", {
    className: "e24-tiny"
  }, eur(p.price), " / unit \xB7 earns ", Math.floor(p.price * qty), " points")), /*#__PURE__*/React.createElement("p", {
    className: "e24-body",
    style: {
      margin: 0
    }
  }, "Short product description and key info for the purchase decision: composition, usage, warnings. Prescription medicines and co-payments earn no points."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, null, "Quantity"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    value: qty,
    onChange: setQty
  }))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => addToCart(p, qty)
  }, "Add to cart")));
}
function CartScreen({
  cart,
  setQty,
  go,
  back,
  balance
}) {
  const subtotal = cart.reduce((s, l) => s + l.price * l.qty, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(AppBar, {
    title: "Cart",
    onBack: back
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...screenPad,
      flex: 1,
      overflowY: "auto"
    }
  }, cart.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-2)"
    }
  }, cart.map(l => /*#__PURE__*/React.createElement(CartLine, {
    key: l.id,
    image: img(l.img),
    name: l.name,
    size: l.size,
    unitPrice: l.price,
    qty: l.qty,
    onQty: n => setQty(l.id, n)
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(KeyValueRow, {
    label: "Subtotal",
    value: eur(subtotal)
  }), /*#__PURE__*/React.createElement(KeyValueRow, {
    label: "Delivery",
    value: "calculated at checkout"
  })), /*#__PURE__*/React.createElement(Banner, null, /*#__PURE__*/React.createElement("b", null, pts(balance), " pts"), " available (\u2248 ", eur(balance / 100), ") \u2014 use them at checkout with one switch, no amount to enter.")) : /*#__PURE__*/React.createElement(EmptyState, {
    icon: "shopping-cart",
    title: "Your cart is empty",
    description: "Find the products you need.",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => go("shop")
    }, "Start shopping")
  })), cart.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      padding: "12px var(--gutter-screen)",
      background: "var(--surface-card)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => go("address")
  }, "Checkout \xB7 ", eur(subtotal))) : null);
}
Object.assign(window, {
  HomeScreen,
  ShopScreen,
  ProductScreen,
  CartScreen,
  Shelf
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/e24_app/screens_shop.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wellplus_admin/admin.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Card,
  Button,
  Chip,
  Banner,
  Divider,
  KeyValueRow,
  Field,
  TextInput,
  Switch,
  Checkbox,
  Radio,
  DataTable,
  StatTile,
  StatusBadge,
  TrendBars,
  EmptyState,
  SectionHeading,
  PointsRange,
  PointsHistoryRow
} = window.E24WellPlusDesignSystem_54c90b;
const AD = {
  customers: [{
    name: "Marko Marković",
    email: "marko@example.com",
    balance: 1247,
    last: "18 Aug 2026"
  }, {
    name: "",
    email: "ana.k@example.com",
    balance: 320,
    last: "15 Aug 2026"
  }, {
    name: "Petra Novak",
    email: "petra.novak@example.com",
    balance: -15,
    last: "20 Aug 2026"
  }, {
    name: "Ivan Kovač",
    email: "ivan.kovac@example.com",
    balance: 875,
    last: "2 Jul 2026"
  }, {
    name: "Marko Marković",
    email: "marko.m2@example.com",
    balance: 60,
    last: "10 Aug 2026"
  }],
  redemptions: [{
    customer: "Petra Novak",
    channel: "Store",
    points: 300,
    status: "Awaiting till confirmation",
    tone: "wait",
    date: "21 Aug 2026, 09:14"
  }, {
    customer: "Ivan Kovač",
    channel: "Store",
    points: 150,
    status: "Recorded twice",
    tone: "attention",
    date: "20 Aug 2026, 17:02"
  }, {
    customer: "Marko Marković",
    channel: "App",
    points: 1247,
    status: "Settled",
    tone: "ok",
    date: "18 Aug 2026, 12:41"
  }, {
    customer: "Ana K.",
    channel: "App",
    points: 400,
    status: "Settled",
    tone: "ok",
    date: "17 Aug 2026, 08:55"
  }],
  changelog: [{
    when: "21 Aug 2026, 10:12",
    who: "Ivana P.",
    what: "Points adjustment +50",
    target: "Marko Marković"
  }, {
    when: "20 Aug 2026, 17:40",
    who: "Ivana P.",
    what: "Redemption corrected",
    target: "Ivan Kovač"
  }, {
    when: "20 Aug 2026, 09:05",
    who: "Damir S.",
    what: "Notification sent · 1.842 recipients",
    target: "All members"
  }, {
    when: "19 Aug 2026, 15:22",
    who: "Damir S.",
    what: "PRIME flag added",
    target: "Vitamin C 1000 mg"
  }]
};
const fmtPts = n => (n < 0 ? "−" : "") + String(Math.abs(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const NAV = [{
  id: "home",
  label: "Home",
  icon: "home"
}, {
  id: "customers",
  label: "Customers",
  icon: "user"
}, {
  id: "redemptions",
  label: "Points redemptions",
  icon: "ticket"
}, {
  id: "notifications",
  label: "Notifications",
  icon: "bell"
}, {
  id: "prime",
  label: "PRIME products",
  icon: "star"
}, {
  id: "analytics",
  label: "Analytics",
  icon: "chart-bar"
}, {
  id: "changelog",
  label: "Change log",
  icon: "list"
}];
function AdminShell({
  route,
  setRoute,
  title,
  dek,
  actions,
  children
}) {
  const [query, setQuery] = React.useState("");
  return /*#__PURE__*/React.createElement("div", {
    className: "admin-shell"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "admin-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "adbrand"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-club)",
      fontSize: 17,
      color: "var(--text-brand)"
    }
  }, "WellPlus"), /*#__PURE__*/React.createElement("span", {
    className: "adbrand-sub"
  }, "admin")), /*#__PURE__*/React.createElement("nav", {
    className: "adnav"
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    type: "button",
    className: "adnav-item" + (route === n.id || route === "customer" && n.id === "customers" || route === "adjust" && n.id === "customers" ? " is-on" : ""),
    onClick: () => setRoute(n.id)
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-" + n.icon
  }), n.label))), /*#__PURE__*/React.createElement("div", {
    className: "adside-foot"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "adnav-item"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-logout"
  }), "Sign out"))), /*#__PURE__*/React.createElement("div", {
    className: "admin-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "admin-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "adsearch"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-search"
  }), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter") setRoute("customers");
    },
    placeholder: "Search by e-mail, name or ID\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "aduser"
  }, /*#__PURE__*/React.createElement("span", {
    className: "av"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-user",
    style: {
      fontSize: 14
    }
  })), "Ivana P. \xB7 Support")), /*#__PURE__*/React.createElement("div", {
    className: "admin-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ad-headrow"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "ad-h1"
  }, title), dek ? /*#__PURE__*/React.createElement("p", {
    className: "ad-dek"
  }, dek) : null), actions), children)));
}
function AdminHome({
  setRoute
}) {
  return /*#__PURE__*/React.createElement(AdminShell, {
    route: "home",
    setRoute: setRoute,
    title: "Home",
    dek: "A quick look before you pick a job \u2014 the same figures already on Redemptions, Analytics and the Change log, not a new data source."
  }, /*#__PURE__*/React.createElement("div", {
    className: "adgrid3"
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Outstanding balance",
    value: "\u20AC48.210,66",
    meta: "refreshed 6 min ago \xB7 Analytics \u203A"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Redemptions needing a look",
    value: "2",
    tone: "attention",
    meta: "Points redemptions \u203A"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Adjustments made today",
    value: "1",
    meta: "by Ivana P."
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      borderRadius: "var(--radius-admin)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    className: "adcard-title"
  }, "Needs attention"), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(DataTable, {
    rows: AD.redemptions.slice(0, 2),
    onRowClick: () => setRoute("customer"),
    columns: [{
      key: "customer",
      label: "Customer"
    }, {
      key: "channel",
      label: "Channel"
    }, {
      label: "Points",
      align: "right",
      render: r => fmtPts(r.points) + " pts"
    }, {
      label: "Status",
      render: r => /*#__PURE__*/React.createElement(StatusBadge, {
        tone: r.tone
      }, r.status)
    }, {
      label: "",
      align: "right",
      render: () => /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "secondary"
      }, "Review")
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      borderRadius: "var(--radius-admin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("b", {
    className: "adcard-title"
  }, "Recent activity"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setRoute("changelog");
    },
    style: {
      fontSize: "var(--size-tiny)"
    }
  }, "Full change log \u203A")), /*#__PURE__*/React.createElement(Divider, null), AD.changelog.slice(0, 3).map((c, i) => /*#__PURE__*/React.createElement(KeyValueRow, {
    key: i,
    label: c.when + " · " + c.who,
    value: c.what + " — " + c.target
  }))));
}
function AdminCustomers({
  setRoute
}) {
  const [q, setQ] = React.useState("");
  const rows = AD.customers.filter(c => (c.name + c.email).toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement(AdminShell, {
    route: "customers",
    setRoute: setRoute,
    title: "Customer search",
    dek: "Search is the start of almost every job. A customer with no name yet is a normal record."
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      borderRadius: "var(--radius-admin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "adsearch adsearch--inline"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-search"
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "E-mail, name or membership ID\u2026",
    autoFocus: true
  })), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(DataTable, {
    rows: rows,
    onRowClick: () => setRoute("customer"),
    emptyLabel: "No customer matches that.",
    columns: [{
      label: "Customer",
      render: r => r.name || /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--text-faint)"
        }
      }, "No name yet")
    }, {
      key: "email",
      label: "E-mail"
    }, {
      label: "Balance",
      align: "right",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          color: r.balance < 0 ? "var(--status-negative)" : "inherit"
        }
      }, fmtPts(r.balance), " pts")
    }, {
      key: "last",
      label: "Last activity"
    }, {
      label: "",
      align: "right",
      render: () => /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--text-faint)"
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: "ti ti-chevron-right"
      }))
    }]
  })));
}
function AdminCustomer({
  setRoute
}) {
  const c = AD.customers[0];
  return /*#__PURE__*/React.createElement(AdminShell, {
    route: "customer",
    setRoute: setRoute,
    title: c.name,
    dek: c.email + " · member since 14 Mar 2026 · WP-4417-8802",
    actions: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => setRoute("adjust")
    }, "Adjust points"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost"
    }, "Open in webshop \u2197"))
  }, /*#__PURE__*/React.createElement("div", {
    className: "adgrid3"
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Current balance",
    value: fmtPts(c.balance) + " pts",
    meta: "\u2248 \u20AC12,47 \xB7 synced 6 min ago"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Lifetime earned",
    value: "4.902",
    meta: "all four channels"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Lifetime redeemed",
    value: "3.655",
    meta: "app and till"
  })), /*#__PURE__*/React.createElement(Card, {
    style: {
      borderRadius: "var(--radius-admin)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    className: "adcard-title"
  }, "Balance against the redemption threshold"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(PointsRange, {
    balance: c.balance
  }))), /*#__PURE__*/React.createElement(Card, {
    style: {
      borderRadius: "var(--radius-admin)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    className: "adcard-title"
  }, "Points ledger"), /*#__PURE__*/React.createElement(Divider, null), window.E24_DATA.history.map((h, i) => /*#__PURE__*/React.createElement(PointsHistoryRow, _extends({
    key: i
  }, h)))));
}
function AdminAdjust({
  setRoute
}) {
  const [dir, setDir] = React.useState("add");
  const [amount, setAmount] = React.useState("50");
  const [reason, setReason] = React.useState("");
  const [confirm, setConfirm] = React.useState(false);
  const next = 1247 + (dir === "add" ? 1 : -1) * (parseInt(amount || "0", 10) || 0);
  return /*#__PURE__*/React.createElement(AdminShell, {
    route: "adjust",
    setRoute: setRoute,
    title: "Manual points adjustment",
    dek: "Marko Markovi\u0107 \xB7 every adjustment is written to the change log with your name on it."
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      borderRadius: "var(--radius-admin)",
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 12,
    style: {
      flex: 1,
      borderColor: dir === "add" ? "var(--border-brand)" : "var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    checked: dir === "add",
    onChange: () => setDir("add"),
    label: "Add points",
    description: "Goodwill, correction, campaign"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 12,
    style: {
      flex: 1,
      borderColor: dir === "remove" ? "var(--border-brand)" : "var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    checked: dir === "remove",
    onChange: () => setDir("remove"),
    label: "Remove points",
    description: "Reverses an earlier award"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Amount",
    hint: "Points, not euro. 100 points = \u20AC1."
  }, /*#__PURE__*/React.createElement(TextInput, {
    value: amount,
    onChange: e => setAmount(e.target.value.replace(/\D/g, ""))
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Reason",
    hint: "Shown in the change log. Required."
  }, /*#__PURE__*/React.createElement(TextInput, {
    value: reason,
    onChange: e => setReason(e.target.value),
    placeholder: "e.g. till receipt 8841 not credited"
  })), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(KeyValueRow, {
    label: "Balance now",
    value: "1.247 pts"
  }), /*#__PURE__*/React.createElement(KeyValueRow, {
    label: "After this adjustment",
    value: fmtPts(next) + " pts",
    tone: next < 0 ? "negative" : "positive"
  }), next < 0 && /*#__PURE__*/React.createElement(Banner, {
    tone: "attention"
  }, "This takes the balance below zero. Allowed, but it needs a reason a colleague can read later."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: confirm,
    onChange: setConfirm,
    label: "I have checked this is the right customer"
  }), /*#__PURE__*/React.createElement(Button, {
    disabled: !confirm || !reason,
    onClick: () => setRoute("customer")
  }, "Apply adjustment")))));
}
function AdminRedemptions({
  setRoute
}) {
  const [filter, setFilter] = React.useState("all");
  const rows = filter === "all" ? AD.redemptions : AD.redemptions.filter(r => r.tone !== "ok");
  return /*#__PURE__*/React.createElement(AdminShell, {
    route: "redemptions",
    setRoute: setRoute,
    title: "Points redemptions",
    dek: "In-store redemptions are applied by the till. This list shows what the till reported back."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    tone: filter === "all" ? "solid" : "outline",
    onClick: () => setFilter("all")
  }, "All"), /*#__PURE__*/React.createElement(Chip, {
    tone: filter === "attention" ? "solid" : "outline",
    onClick: () => setFilter("attention")
  }, "Needs a look")), /*#__PURE__*/React.createElement(Card, {
    style: {
      borderRadius: "var(--radius-admin)"
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    rows: rows,
    onRowClick: () => setRoute("customer"),
    columns: [{
      key: "date",
      label: "When"
    }, {
      key: "customer",
      label: "Customer"
    }, {
      key: "channel",
      label: "Channel"
    }, {
      label: "Points",
      align: "right",
      render: r => fmtPts(r.points) + " pts"
    }, {
      label: "Value",
      align: "right",
      render: r => "€" + (r.points / 100).toFixed(2).replace(".", ",")
    }, {
      label: "Status",
      render: r => /*#__PURE__*/React.createElement(StatusBadge, {
        tone: r.tone
      }, r.status)
    }, {
      label: "",
      align: "right",
      render: r => r.tone === "ok" ? null : /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "secondary"
      }, "Correct")
    }]
  })));
}
function AdminNotifications({
  setRoute
}) {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [segment, setSegment] = React.useState("all");
  const counts = {
    all: "1.842",
    threshold: "612",
    dormant: "318"
  };
  return /*#__PURE__*/React.createElement(AdminShell, {
    route: "notifications",
    setRoute: setRoute,
    title: "Compose and send notification",
    dek: "One message, one segment, no scheduling in this release."
  }, /*#__PURE__*/React.createElement("div", {
    className: "adcols"
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      borderRadius: "var(--radius-admin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Title",
    hint: "Shown in bold on the lock screen."
  }, /*#__PURE__*/React.createElement(TextInput, {
    value: title,
    onChange: e => setTitle(e.target.value),
    placeholder: "Your points are ready to use"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Message",
    hint: "Two lines at most on most phones."
  }, /*#__PURE__*/React.createElement(TextInput, {
    value: body,
    onChange: e => setBody(e.target.value),
    placeholder: "You have 1.247 points \u2014 \u20AC12,47 off your next order."
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, null, "Segment"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      marginTop: "var(--space-5)"
    }
  }, [["all", "All members", counts.all], ["threshold", "Above the redemption threshold", counts.threshold], ["dormant", "No purchase in 90 days", counts.dormant]].map(([id, label, n]) => /*#__PURE__*/React.createElement(Radio, {
    key: id,
    checked: segment === id,
    onChange: () => setSegment(id),
    label: label,
    trailing: n + " people"
  })))), /*#__PURE__*/React.createElement(Button, {
    disabled: !title || !body
  }, "Send to ", counts[segment], " people"))), /*#__PURE__*/React.createElement(Card, {
    variant: "quiet",
    style: {
      borderRadius: "var(--radius-admin)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    className: "adcard-title"
  }, "Preview"), /*#__PURE__*/React.createElement("div", {
    className: "lockpreview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "osnotif"
  }, /*#__PURE__*/React.createElement("span", {
    className: "osnotif-icon"
  }, "e24"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "osnotif-head"
  }, "e24 \xB7 now"), /*#__PURE__*/React.createElement("div", {
    className: "osnotif-title"
  }, title || "Your points are ready to use"), /*#__PURE__*/React.createElement("div", {
    className: "osnotif-body"
  }, body || "You have 1.247 points — €12,47 off your next order.")))), /*#__PURE__*/React.createElement("p", {
    className: "e24-tiny",
    style: {
      marginBottom: 0
    }
  }, "Members who turned marketing consent off never receive this, whatever the segment says."))));
}
function AdminPrime({
  setRoute
}) {
  const rows = window.E24_DATA.products.slice(0, 6).map(p => ({
    ...p,
    prime: !!p.badge
  }));
  const [state, setState] = React.useState(rows.map(r => r.prime));
  return /*#__PURE__*/React.createElement(AdminShell, {
    route: "prime",
    setRoute: setRoute,
    title: "PRIME products",
    dek: "The PRIME flag lives here. Prices, stock and copy stay in the webshop \u2014 this panel never becomes a second truth."
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      borderRadius: "var(--radius-admin)"
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    rows: rows.map((r, i) => ({
      ...r,
      i
    })),
    columns: [{
      label: "Product",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: window.E24_FMT.img(r.img),
        alt: "",
        style: {
          width: 32,
          height: 32,
          objectFit: "contain"
        }
      }), r.name)
    }, {
      key: "size",
      label: "Pack"
    }, {
      label: "Price",
      align: "right",
      render: r => window.E24_FMT.eur(r.price)
    }, {
      label: "PRIME",
      align: "right",
      render: r => /*#__PURE__*/React.createElement(Switch, {
        checked: state[r.i],
        onChange: v => setState(s => s.map((x, j) => j === r.i ? v : x))
      })
    }]
  })));
}
function AdminAnalytics({
  setRoute
}) {
  return /*#__PURE__*/React.createElement(AdminShell, {
    route: "analytics",
    setRoute: setRoute,
    title: "Analytics",
    dek: "Last 30 days. Figures come from the loyalty ledger, refreshed hourly."
  }, /*#__PURE__*/React.createElement("div", {
    className: "adgrid3"
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Points issued",
    value: "182.440",
    meta: "\u2248 \u20AC1.824,40 of future discount"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Points redeemed",
    value: "96.120",
    meta: "52,7% of issued"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Members redeeming",
    value: "418",
    meta: "of 1.842 members"
  })), /*#__PURE__*/React.createElement("div", {
    className: "adcols"
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      borderRadius: "var(--radius-admin)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    className: "adcard-title"
  }, "Points issued per week"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(TrendBars, {
    values: [38, 42, 51, 44, 57, 61, 72],
    height: 90
  })), /*#__PURE__*/React.createElement("div", {
    className: "adaxis"
  }, /*#__PURE__*/React.createElement("span", null, "15 Jul"), /*#__PURE__*/React.createElement("span", null, "21 Aug"))), /*#__PURE__*/React.createElement(Card, {
    style: {
      borderRadius: "var(--radius-admin)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    className: "adcard-title"
  }, "Where points are earned"), /*#__PURE__*/React.createElement(Divider, null), [["21 pharmacies", "64%"], ["e24.hr", "21%"], ["App", "11%"], ["Centar zdravih rješenja", "4%"]].map(([k, v]) => /*#__PURE__*/React.createElement(KeyValueRow, {
    key: k,
    label: k,
    value: v
  })))));
}
function AdminChangelog({
  setRoute
}) {
  return /*#__PURE__*/React.createElement(AdminShell, {
    route: "changelog",
    setRoute: setRoute,
    title: "Change log",
    dek: "Every action that changed a customer's points, with who did it and why."
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      borderRadius: "var(--radius-admin)"
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    rows: AD.changelog,
    columns: [{
      key: "when",
      label: "When"
    }, {
      key: "who",
      label: "Who"
    }, {
      key: "what",
      label: "What changed"
    }, {
      key: "target",
      label: "Record"
    }]
  })));
}
function AdminSignIn({
  onSignIn
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "adlogin"
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      width: 340,
      borderRadius: "var(--radius-admin)",
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-club)",
      fontSize: 24,
      color: "var(--text-brand)"
    }
  }, "WellPlus"), /*#__PURE__*/React.createElement("div", {
    className: "adbrand-sub",
    style: {
      marginBottom: 20
    }
  }, "admin"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "E-mail"
  }, /*#__PURE__*/React.createElement(TextInput, {
    value: "ivana.p@svaljek.hr"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Password"
  }, /*#__PURE__*/React.createElement(TextInput, {
    type: "password",
    value: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7"
  })), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: onSignIn
  }, "Sign in"), /*#__PURE__*/React.createElement("p", {
    className: "e24-tiny",
    style: {
      margin: 0
    }
  }, "Support role: read customers, adjust points, correct redemptions. Two roles exist; the rest is read-only."))));
}
function AdminApp() {
  const [route, setRoute] = React.useState("signin");
  const map = {
    home: AdminHome,
    customers: AdminCustomers,
    customer: AdminCustomer,
    adjust: AdminAdjust,
    redemptions: AdminRedemptions,
    notifications: AdminNotifications,
    prime: AdminPrime,
    analytics: AdminAnalytics,
    changelog: AdminChangelog
  };
  if (route === "signin") return /*#__PURE__*/React.createElement("div", {
    className: "admin-window"
  }, /*#__PURE__*/React.createElement(AdminSignIn, {
    onSignIn: () => setRoute("home")
  }));
  const S = map[route] || AdminHome;
  return /*#__PURE__*/React.createElement("div", {
    className: "admin-window"
  }, /*#__PURE__*/React.createElement(S, {
    setRoute: setRoute
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(AdminApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wellplus_admin/admin.jsx", error: String((e && e.message) || e) }); }

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.TrendBars = __ds_scope.TrendBars;

__ds_ns.Carousel = __ds_scope.Carousel;

__ds_ns.CartLine = __ds_scope.CartLine;

__ds_ns.CategoryTile = __ds_scope.CategoryTile;

__ds_ns.ProductTile = __ds_scope.ProductTile;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.KeyValueRow = __ds_scope.KeyValueRow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Sheet = __ds_scope.Sheet;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.PointsBalance = __ds_scope.PointsBalance;

__ds_ns.PointsHistoryRow = __ds_scope.PointsHistoryRow;

__ds_ns.PointsRange = __ds_scope.PointsRange;

__ds_ns.QrCard = __ds_scope.QrCard;

__ds_ns.TierReserve = __ds_scope.TierReserve;

__ds_ns.AppBar = __ds_scope.AppBar;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.StepIndicator = __ds_scope.StepIndicator;

__ds_ns.TabBar = __ds_scope.TabBar;

})();
