import React from 'react';
import { Timeline } from 'react-twitter-widgets';
import { twitterFeeds } from '../config';

class TabbedTwitterFeeds extends React.Component {
  constructor(props) {
    super(props);

    this.setInitialActiveIndex();

    // This binding is necessary to make 'this' work in the callback
    this.updateActiveIndex = this.updateActiveIndex.bind(this);
  }

  setInitialActiveIndex() {
    const location = window.location.toString();
    const anchor = location.substring(location.indexOf('#') + 1);
    const activeFeed = twitterFeeds.find(feed => feed.feedId === anchor);

    if (activeFeed) {
      this.state = { activeIndex: twitterFeeds.indexOf(activeFeed) };
    } else {
      this.state = { activeIndex: 0 };
    }
  }

  updateActiveIndex(index) {
    this.setState({ activeIndex: index });
  }

  indexIsActive(index) {
    const { activeIndex } = this.state;

    return activeIndex === index;
  }

  activeButtonClass(index) {
    if (this.indexIsActive(index)) {
      return 'active';
    }
    return '';
  }

  ariaSelected(index) {
    if (this.indexIsActive(index)) {
      return 'true';
    }
    return 'false';
  }

  render() {
    return (
      <div>
        <div className="graphTabs">
          {
            twitterFeeds.map((feed, i) => (
              <button
                type="button"
                role="tab"
                id={feed.feedId}
                className={this.activeButtonClass(i)}
                aria-selected={this.ariaSelected(i)}
                key={JSON.stringify(feed.label)}
                onClick={() => this.updateActiveIndex(i)}
              >
                { feed.label }
              </button>
            ))
          }
        </div>
        <div aria-live="polite">
          {
            twitterFeeds.filter((feed, i) => (this.indexIsActive(i))).map(feed => (
              <Timeline
                dataSource={{
                  sourceType: 'profile',
                  screenName: feed.feedId,
                }}
                key={feed.feedId}
                options={{
                  chrome: 'noheader nofooter',
                  width: 600,
                  height: 600,
                }}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default TabbedTwitterFeeds;
