import 'dotenv/config';
import models, { sequelize } from '../models/index.js';

const { Artist, EventInfo, Admin, Booking } = models;

const seedDatabase = async () => {
  try {
    console.log('🌱 Starting database seeding...');

    // Sync database (drop and recreate tables)
    await sequelize.sync({ force: true });
    console.log('✅ Database synced');

    // Seed Event Info
    const eventData = {
      title: 'La Grande Soirée Gnawa',
      description: 'Venez célébrer le patrimoine musical Gnawa avec les meilleurs artistes du Maroc. Une soirée inoubliable qui mêle tradition ancestrale et énergie moderne dans la magnifique ville d\'Agadir.',
      date: '2025-03-15',
      time: '19:00',
      location: 'Agadir, Maroc',
      venue: 'Théâtre Amazigh',
      ticket_price: 150.00,
      total_capacity: 500,
      banner_url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800'
    };

    await EventInfo.create(eventData);
    console.log('✅ Event info created');

    // Seed Artists
    const artistsData = [
      {
        name: 'Maâlem Hassan Boussou',
        bio: 'Maître Gnawa reconnu internationalement, Hassan Boussou est un virtuose du guembri avec plus de 30 ans d\'expérience. Il perpétue la tradition ancestrale tout en innovant dans l\'art Gnawa.',
        image_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
        performance_time: '19:30 - 20:30',
        instruments: 'Guembri, Krakebs'
      },
      {
        name: 'Groupe Bnat Houariyat',
        bio: 'Un collectif de femmes artistes qui révolutionnent la scène Gnawa. Leur énergie et leur talent apportent une nouvelle dimension à cet art traditionnel.',
        image_url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400',
        performance_time: '20:45 - 21:45',
        instruments: 'Krakebs, Tbel, Chants'
      },
      {
        name: 'Maâlem Mahmoud Guinea',
        bio: 'Figure emblématique du Gnawa moderne, Mahmoud Guinea fusionne les rythmes traditionnels avec des influences jazz et world music, créant un son unique et captivant.',
        image_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400',
        performance_time: '22:00 - 23:00',
        instruments: 'Guembri, Krakebs, Percussion'
      },
      {
        name: 'Ensemble Gnawa Essaouira',
        bio: 'Directement d\'Essaouira, capitale spirituelle du Gnawa, cet ensemble authentique vous transportera dans un voyage mystique au cœur de cette tradition millénaire.',
        image_url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400',
        performance_time: '23:15 - 00:15',
        instruments: 'Guembri, Krakebs, Tbel, Qarqaba'
      },
      {
        name: 'Fatima Zahra',
        bio: 'Chanteuse talentueuse spécialisée dans les chants traditionnels Gnawa, Fatima Zahra incarne la nouvelle génération d\'artistes qui honorent le patrimoine tout en le modernisant.',
        image_url: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400',
        performance_time: '21:00 - 21:30',
        instruments: 'Chants, Krakebs'
      }
    ];

    const artists = await Artist.bulkCreate(artistsData);
    console.log(`✅ ${artists.length} artists created`);

    // Seed Admin
    const adminData = {
      username: 'admin',
      email: 'admin@gnawa-event.ma',
      password: 'Admin123!',
      role: 'admin'
    };

    await Admin.create(adminData);
    console.log('✅ Admin user created');
    console.log('📧 Admin credentials:');
    console.log('   Email: admin@gnawa-event.ma');
    console.log('   Password: Admin123!');

    // Seed Sample Bookings
    const bookingsData = [
      {
        full_name: 'Mohammed Alami',
        email: 'mohammed.alami@example.com',
        phone: '+212612345678',
        number_of_tickets: 2,
        confirmation_code: 'GN2024A1',
        status: 'confirmed'
      },
      {
        full_name: 'Fatima Benali',
        email: 'fatima.benali@example.com',
        phone: '+212623456789',
        number_of_tickets: 4,
        confirmation_code: 'GN2024B2',
        status: 'confirmed'
      },
      {
        full_name: 'Youssef Idrissi',
        email: 'youssef.idrissi@example.com',
        phone: '+212634567890',
        number_of_tickets: 1,
        confirmation_code: 'GN2024C3',
        status: 'confirmed'
      }
    ];

    const bookings = await Booking.bulkCreate(bookingsData);
    console.log(`✅ ${bookings.length} sample bookings created`);

    console.log('\n🎉 Database seeding completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`   - 1 Event created`);
    console.log(`   - ${artists.length} Artists created`);
    console.log(`   - 1 Admin user created`);
    console.log(`   - ${bookings.length} Sample bookings created`);
    console.log('\n🚀 You can now start the server with: npm run dev');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();