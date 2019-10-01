import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Anchor from '@trendmicro/react-anchor';
import styles from './index.styl';

class ToggleSwitch extends PureComponent {
    static propTypes = {
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        size: PropTypes.oneOf([
            'lg',
            'large',
            'sm',
            'small'
        ])
    };
    static defaultProps = {
        checked: false,
        disabled: false,
        size: 'lg'
    };

    state = {
        checked: this.props.checked
    };
    actions = {
        handleChange: (event) => {
            event.preventDefault();

            if (this.props.disabled) {
                return;
            }

            if (typeof this.props.onChange === 'function') {
                this.props.onChange(event);
                return;
            }

            this.setState({ checked: !this.state.checked });
        }
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.checked !== nextProps.checked) {
            this.setState({ checked: nextProps.checked });
        }
    }
    get checked() {
        return this.state.checked;
    }
    render() {
        const {
            className,
            disabled,
            size,
            onColor,
            offColor,
            ...props
        } = this.props;

        delete props.checked;
        delete props.onChange;

        const color = this.state.checked ? onColor : offColor;

        return (
            <Anchor
                {...props}
                className={classNames(
                    className,
                    styles.switch,
                    { [styles.switchSm]: size === 'sm' || size === 'small' },
                    { [styles.checked]: this.state.checked }
                )}
                onClick={this.actions.handleChange}
            >
                <div
                    className={classNames(
                        styles.toggle,
                        { [styles.toggleSm]: size === 'sm' || size === 'small' },
                        styles.round,
                        { [styles.disabled]: disabled }
                    )}
                    style={{ backgroundColor: color, borderColor: color }}
                />
            </Anchor>
        );
    }
}

export default ToggleSwitch;
