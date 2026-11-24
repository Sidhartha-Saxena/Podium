import { assert, it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as HttpClient from "effect/http/HttpClient";

import * as AnalyticsService from "./AnalyticsService.ts";

it.effect("records, flushes, and reports owners without making a request", () => {
  let requests = 0;
  const countingHttpClient = Layer.succeed(
    HttpClient.HttpClient,
    HttpClient.make(() => {
      requests += 1;
      return Effect.die("analytics must not make requests");
    }),
  );

  return Effect.gen(function* () {
    const analytics = yield* AnalyticsService.AnalyticsService;
    yield* analytics.record("client.turn.requested", { surface: "desktop" });
    yield* analytics.recordOwners([{ source: "device", ownerId: "owner" }], "client");
    yield* analytics.flush;
    assert.strictEqual(requests, 0);
  }).pipe(Effect.provide(Layer.merge(AnalyticsService.layer, countingHttpClient)));
});
