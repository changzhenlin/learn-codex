import Link from "next/link";
import { notFound } from "next/navigation";
import { getUserById, getUserStatusMeta } from "@/lib/users";

export const dynamic = "force-dynamic";

type UserDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function UserDetailPage({ params }: UserDetailPageProps) {
  const { id } = await params;
  const user = await getUserById(id);

  if (!user) {
    notFound();
  }

  const status = getUserStatusMeta(user.status);
  const paragraphs = user.longBio
    .split("\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <main>
      <section className="profile-hero">
        <div className="profile-cover">
          <img src={user.coverImage} alt={user.name} />
        </div>

        <div className="profile-overlay" />

        <div className="profile-shell">
          <Link className="back-link profile-back-link" href="/products">
            返回商城页
          </Link>

          <div className="profile-header">
            <div className="profile-avatar-wrap">
              <img className="profile-avatar" src={user.avatar} alt={user.name} />
            </div>

            <div className="profile-heading">
              <p className="eyebrow profile-eyebrow">Member Profile</p>
              <h1 className="profile-title">{user.name}</h1>
              <p className="profile-role">{user.role}</p>
              <p className="profile-bio">{user.bio}</p>
            </div>

            <div className="profile-status-panel">
              <span className={`status-pill ${status.className}`}>{status.label}</span>
              <p>{user.city}</p>
              <p>{user.responseTime}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell profile-content">
        <div className="profile-main">
          <section className="profile-section">
            <div className="section-head">
              <h2>关于她</h2>
              <span>加入于 {user.joinedAt}</span>
            </div>
            <div className="profile-prose">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="profile-section">
            <div className="section-head">
              <h2>最近动态</h2>
              <span>{user.activities.length} 条更新</span>
            </div>
            <div className="timeline">
              {user.activities.map((activity) => (
                <article key={`${activity.title}-${activity.timestamp}`} className="timeline-item">
                  <p className="timeline-time">{activity.timestamp}</p>
                  <h3>{activity.title}</h3>
                  <p>{activity.summary}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="profile-sidebar">
          <section className="sidebar-block">
            <p className="eyebrow">Contact</p>
            <a href={`mailto:${user.email}`}>{user.email}</a>
            <a href={`tel:${user.phone.replace(/\s+/g, "")}`}>{user.phone}</a>
          </section>

          <section className="sidebar-block">
            <p className="eyebrow">Focus Areas</p>
            <div className="tag-list">
              {user.focusAreas.map((area) => (
                <span key={area} className="tag-chip">
                  {area}
                </span>
              ))}
            </div>
          </section>

          <section className="sidebar-block">
            <p className="eyebrow">Work Snapshot</p>
            <div className="snapshot-grid">
              <div>
                <strong>{user.completionRate}</strong>
                <span>任务完成率</span>
              </div>
              <div>
                <strong>{user.responseTime}</strong>
                <span>平均响应</span>
              </div>
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}
