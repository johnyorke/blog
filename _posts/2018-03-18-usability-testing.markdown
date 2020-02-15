---
layout: post
title:  "Usability Testing"
date:   2018-08-18 19:58:06 +0000
categories: usability-testing
---

![Woman's hands holding an iPhone X and pressing on a control on screen]({{site.url}}/assets/images/usability_testing/device_in_hand.jpeg)

When all your hard work is put under a microscope it can lead to a rather uncomfortable feeling.

No one wants to hear that the project they’ve been working on for *x* number of months is “complicated”, “looks ugly”, or “doesn’t work”. It can lead to feelings of self-doubt or even lead you to giving up altogether. However, if framed right, it can be one of the most fulfilling and useful things you can do for your project.

In the last couple of weeks I’ve been carrying out some usability tests on a project I’ve been working on for over a year. The feedback we’ve received in the space of 6 sessions far surpasses that of which we’ve received in a whole year of internal testing and informal demos with friends or colleagues.

Below I will outline a process that has worked quite well for us and address some of the difficulties.

## Goal

Our goal was simple, recreate a typical first run experience for the user and observe their behaviour.

## Format

We settled on a 3 stage format for the tests.

1. Find out a little bit about the tester

1. Let them play on the app

1. Find out what they thought about the app

Stages 1 and 3 took part via an informal chat where myself and a colleague would take notes or fill in a prepared survey in Google Forms.

### Tasks

Stage 2 consisted of setting the scene for the installation of the app (in this case an imaginary post on Instagram with a call-to-action to install the app) and observing whilst the tester launches the app for the first time.

If your project only has 1 use or feature, you might be ok with just letting them run the app and observing. However given the relative complexity of our app, we felt it best to subtly guide the user towards the feature we wanted to test. We did this by setting a handful of tasks for the user to accomplish.

It’s important that these tasks:

* do not use the same terminology the app uses (your users haven’t defined or lived with these terms for months, after all)

* don’t take longer than 10 minutes to complete (it’s surprisingly tiring for the tester to be observed for long periods of time)

* don’t feel or sound like exam questions (this can be off-putting to the tester if it feels like there is only one solution and that if they can’t find it that they have failed)

### Some Sample Tasks

For a game…
> Launch the app and enter a challenge

For a weather app…
> Check the weather in France

For a social network…
> Now you’ve got to grips with the app, why don’t you go and set up your profile

For a camera app…
> Take a few pictures then brighten them up a bit.

All of these can be interpreted in a lot of ways, and you’ll most likely find the participant’s interpretation (of something that makes complete sense to you) quite surprising.

## Recruitment

Next, you’ll need some participants. Ideally you want people that are completely unaware of the project but *roughly* match the target audience.

Our initial thought was Facebook ads, but our sign-up rate was poor and communicating and scheduling with the people that did sign up was troublesome. We eventually settled on running our tests on unsuspecting friends.

We offered each participant £50 in vouchers to take part, feeling it’s only fair to reward people for taking the time out to, essentially, do us a huge favour.

## Handling Testers

It’s important to let the testers know a few things before you begin. I made of point of letting them know:

1. They are *not being tested*, they are *helping us test* the app (big difference)

1. Nothing they can say or do is wrong. They cannot offend, and getting stuck or confused is totally acceptable and is on us as developers/designers – **not** their fault.

1. If they do get stuck, that they are encouraged to troubleshoot themselves as if we (the hosts) are not there.

I’d also make a point of keeping the whole experience under an hour. During the tests I noticed that being filmed and observed takes its toll on the participants. Most of them finished a task with a “phew!” and however well you set up the environment and attempt to relax the participant, I think the unnatural setting and task at hand will make them feel slightly on-edge.

We also set a limit of 3 people in the room at any one time, the tester and 2 hosts. Any more and it could start to feel more like they are being scientifically observed by a roomful of quiet lurkers – not the setting you want to recreate.

## Equipment

### The Location

Your first piece of “equipment” is a setting. This should be private and quiet. You want the participant to be able to speak freely and not feel self-conscious.

### Camera

If the participant agrees (and signs a waiver) then having a camera trained on participants screen is a huge help when it comes to the post interview analysis you’ll carry out later with your team. Ask the tester to sit comfortably with a phone in their hand. If they’re right-handed, put the camera over their left shoulder, and vice versa. I used a DSLR with 80mm lens, mounted on a tripod. Frame it so only the users hands and device are in the shot.

### iPad

An iPad is useful for a couple of purposes:

1. To sign an NDA and a waiver that you have prepared

1. To show the task the user is currently on during the test (helps them remember and might provide clues upon re-reading)

### Test Devices

Obviously a device to run the application is useful. If it’s not on TestFlight or the Play Store, then provide the user with a clean device (ideally that matches the size of theirs) with a full battery and Do Not Disturb turned on.

### Something To Take Notes

When it comes to notes, anything that is silent. Personally I’d avoid an electronic device because it can appear that you’re emailing or not paying attention.

## Analysis

Compiling the results after all the tests have been completed can be a daunting task. You’ll be left with hours of video and a tonne of notes.

My advice is to watch the first session back and start building a bingo card of issues. All of the subsequent videos will either add tiles to your bingo card, or most likely you’ll start adding tallies to existing issues.

At the end of the last video, sort your “bingo card” by the tallies and you should be left with an ordered list of reoccurring issues.

I’ve found that a lot of usability issues can be resolved with “easy wins” – changing button labels, rewriting copy, making headers bigger, etc. If an issue reoccurs that can be resolved using these methods I’d throw them right to the top of your pile. Those small fixes can get you 60% of the way towards your next, much-improved, release.

## Other Tips

1. Try not to say anything whilst the user is carrying out a task. It feels unnatural to both you and the participant. But explain up front that it’s going to happen and the reason being that you’re trying to recreate the a situation where there aren’t 2 developers of the app they’re using in the room.

1. End the testing phase with an easy task so the user can leave feeling that they have progressed.

1. Finding people in your target audience is great, but don’t discount people that sit on the fringe or way outside. Guaranteed they will have a perspective that is both valid and surprising.

## Conclusion

I’m writing about this experience simply because I found it to be one of the most useful things I’ve done as a developer. The amount of feedback we collected during these sessions is staggering and I’ve no doubt will prove incredibly valuable. We’d never of considered certain things that came out of these tests had we not carried them out.

As a developer or a designer it can be incredibly painful to hear what your users have to say. You want to jump in and shout “you’re using it wrong!”. But if you can restrain yourself, I guarantee that all of the *negatives* you might hear during the sessions will have a huge *positive* impact on the project. Think of it as a case of “better the devil you know”.

### Further Reading

[Designed for Use](https://www.amazon.com/Designed-Use-Create-Interfaces-Applications/dp/1934356751) by Lukas Mathis
