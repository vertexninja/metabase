import { Collection, Timeline, TimelineEvent } from "metabase-types/api";
import { collection as getCollectionUrl } from "./collections";

export function timelinesInCollection(collection: Collection) {
  const collectionUrl = getCollectionUrl(collection);
  return `${collectionUrl}/timelines`;
}

export function timelinesArchiveInCollection(collection: Collection) {
  return `${timelinesInCollection(collection)}/archive`;
}

export function timelineInCollection(
  timeline: Timeline,
  collection: Collection,
) {
  return `${timelinesInCollection(collection)}/${timeline.id}`;
}

export function newTimelineInCollection(collection: Collection) {
  return `${timelinesInCollection(collection)}/new`;
}

export function editTimelineInCollection(
  timeline: Timeline,
  collection: Collection,
) {
  return `${timelineInCollection(timeline, collection)}/edit`;
}

export function timelineArchiveInCollection(
  timeline: Timeline,
  collection: Collection,
) {
  return `${timelineInCollection(timeline, collection)}/archive`;
}

export function deleteTimelineInCollection(
  timeline: Timeline,
  collection: Collection,
) {
  return `${timelineInCollection(timeline, collection)}/delete`;
}

export function newEventInCollection(
  timeline: Timeline,
  collection: Collection,
) {
  return `${timelineInCollection(timeline, collection)}/events/new`;
}

export function newEventAndTimelineInCollection(collection: Collection) {
  return `${timelinesInCollection(collection)}/new/events/new`;
}

export function editEventInCollection(
  event: TimelineEvent,
  timeline: Timeline,
  collection: Collection,
) {
  const timelineUrl = timelineInCollection(timeline, collection);
  return `${timelineUrl}/events/${event.id}/edit`;
}

export function deleteEventInCollection(
  event: TimelineEvent,
  timeline: Timeline,
  collection: Collection,
) {
  const timelineUrl = timelineInCollection(timeline, collection);
  return `${timelineUrl}/events/${event.id}/delete`;
}
