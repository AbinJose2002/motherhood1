import React, { useState, useEffect, useRef } from 'react';
import Video from 'twilio-video';

const VideoCall = ({ identity }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();

  useEffect(() => {
    const joinRoom = async () => {
      try {
        const response = await fetch(`/token?identity=${identity}`);
        const data = await response.json();

        Video.connect(data.token, { name: 'video-room' }).then(room => {
          setRoom(room);

          room.on('participantConnected', participant => {
            setParticipants(prevParticipants => [...prevParticipants, participant]);

            participant.tracks.forEach(publication => {
              if (publication.isSubscribed) {
                const track = publication.track;
                remoteVideoRef.current.appendChild(track.attach());
              }
            });

            participant.on('trackSubscribed', track => {
              remoteVideoRef.current.appendChild(track.attach());
            });
          });

          room.localParticipant.videoTracks.forEach(publication => {
            localVideoRef.current.appendChild(publication.track.attach());
          });
        });
      } catch (error) {
        console.error('Error connecting to the room:', error);
      }
    };

    joinRoom();

    return () => {
      if (room) {
        room.disconnect();
      }
    };
  }, [identity, room]);

  return (
    <div className="video-call">
      <div className="local-video">
        <h3>Your Video</h3>
        <div ref={localVideoRef}></div>
      </div>
      <div className="remote-video">
        <h3>Doctor's Video</h3>
        <div ref={remoteVideoRef}></div>
      </div>
    </div>
  );
};

export default VideoCall;
