import React from 'react';
import './style.css';
import avatarImg from '../../../assets/img_avatar.png';

export default function ProfileCard() {
  const name = 'Ali ALI';
  const jobTitle = 'MD, PhD, Cardiac Electrophysiology';
  return (
    <div className="profile__card">
      <img src={avatarImg} alt="avatarImg" className="avatar__img" />
      <h1 className="card__name">{name}</h1>
      <h1 className="card__jobtitle">{jobTitle}</h1>
    </div>
  );
}
